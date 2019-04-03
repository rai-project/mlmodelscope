import React, { Component } from "react";
import { Stage, Layer, Image, Label, Text, Tag, Rect } from "react-konva";
// import predict from "./SemanticSegResult.json";
import Imagejs from "image-js";
import { filter } from "lodash";

const colors = [
  [232, 74, 39], // UI Orange
  [33, 160, 44], // Green
  [226, 47, 47], // Red
  [106, 61, 154], // Purple
  [31, 120, 180], // Light Blue
  [177, 89, 40], // Brown
  [26, 38, 58], // UI Dark Blue
];


class URLImage extends React.Component {
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        image={this.props.image}
        ref={node => {
          this.imageNode = node;
        }}
        scaleX={this.props.scaleX || 1}
        scaleY={this.props.scaleY || 1}
      />
    );
  }
}

class SemanticMask extends Component {
  constructor(props) {
    super(props);
    // var data = predict.responses[0].features;
    // this.intmask = data[0].semantic_segment.int_mask;
    // this.width = data[0].semantic_segment.width;
    // this.height = data[0].semantic_segment.height;
    this.intmask = props.features[0].semantic_segment.int_mask;
    this.width = props.features[0].semantic_segment.width;
    this.height = props.features[0].semantic_segment.height;
    this.maskImage = new Array(this.intmask.length * 3);
  }

  convertIntMaskToImage() {
    var colorMap = {0: [255, 255, 255]};
    var colorIndex = 0;
    for (let i = 0; i < this.intmask.length; i++) {
      if (colorIndex === 7) {
        console.log(colorMap)
      }
      if (!(this.intmask[i] in colorMap)) {
        colorMap[this.intmask[i]] = colors[colorIndex];
        colorIndex++;
      }
      
      var color = colorMap[this.intmask[i]] 
      if (color == undefined) {
        console.log(colorMap)
        console.log(this.intmask[i])
      }
      this.maskImage[i*3] = color[0];
      this.maskImage[i*3+1] = color[1];
      this.maskImage[i*3+2] = color[2];
    }
    console.log(this.maskImage)
    // var img = new Image(this.width, this.height, this.maskImage, {kind: "RGB"})
    // var rgbaimg = img.rgba8();
    // return rgbaimg.toDataURL();
  }
  
  render() {
    this.convertIntMaskToImage();
    var img = new Imagejs(this.width, this.height, this.maskImage, {kind: "RGB"})
    var rgbaimg = img.rgba8();
    var image = new window.Image();
    image.src = rgbaimg.toDataURL();
    return(
      <URLImage
        image={image}
        x={0}
        y={0}
        scaleX={this.props.width/this.width}
        scaleY={this.props.height/this.height}
      />
    )
  }
}

export default class SemanticSegmentationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      width: null,
      height: null,
      mouseOn: null,
    };
  }

  componentDidMount() {
    this.loadImage();
  }

  componentWillUnmount() {
    this.state.image.removeEventListener("load", this.handleLoad);
  }

  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.state.image = new window.Image();
    this.state.image.src = this.props.imgUrl;
    // this.state.image.src = "http://ww4.hdnux.com/photos/41/15/35/8705883/4/920x920.jpg";
    this.state.image.addEventListener("load", this.handleLoad);
  }

  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      width: this.state.image.width,
      height: this.state.image.height,
    });
    console.log(this.state.image.width);
    console.log(this.state.image.height);
    // if you keep same image object during source updates
    // you will have to update layer manually:
    // this.state.imageNode.getLayer().batchDraw();
  };

  render() {
    if (this.state.width === null) {
      return null;
    } else {
      return (
        <Stage width={window.innerWidth - 372} height={1000}>
          <Layer>
            {/* For Local Test */}
            {/* <URLImage src="https://i.imgur.com/rZuyMXF.jpg" x={100} y={50} features={this.props.features}/> */}
            <URLImage
              image={this.state.image}
              x={0}
              y={0}
            />
          </Layer>
          <Layer opacity={0.5}>
            <SemanticMask width={this.state.width} height={this.state.height} features={this.props.features}/>
          </Layer>
        </Stage>
      );
    }
  }
}