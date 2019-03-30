import React, { Component } from "react";
import { Stage, Layer, Image, Label, Text, Tag, Rect } from "react-konva";
import predict from "./predict.json";
import { filter } from "lodash";

const colors = [
  "#e84a27", // UI Orange
  "#33a02c", // Green
  "#e22f2f", // Red
  "#6a3d9a", // Purple
  "#1f78b4", // Light Blue
  "#b15928", // Brown
  "#1a263a", // UI Dark Blue
];

class BBoxLabel extends Component {
  render() {
    return (
      <React.Fragment>
        <Label x={this.props.x} y={this.props.y - 14}>
          <Tag fill={this.props.color} />
          <Text text={this.props.text} fill="white" fontSize={14} />
        </Label>
      </React.Fragment>
    );
  }
}

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
      />
    );
  }
}

export default class SegmentationResult extends Component {
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

  probabilityToPercentage(probability) {
    return (probability * 100).toFixed(0) + "%";
  }

  handleMouseEnter = e => {
    console.log(e);
    this.setState({ mouseOn: e.currentTarget.attrs.id });
  };

  handleMouseLeave = e => {
    console.log("Mouse Leave");
    this.setState({ mouseOn: null });
  };

  renderBBox() {
    if (this.state.image === null) {
      return null;
    }
    // FOR Local Test
    // var features = filter(predict[0]["response"][0]["features"], function(o) {return o.probability >= 0.4})
    var features = filter(this.props.features, function(o) {
      return o.probability >= 0.4;
    });
    console.log(features);
    var colorMap = {};
    var currentColorIndex = 0;
    var mouseOn = this.state.mouseOn;
    return features.map((data, index) => {
      var bbox = data["bounding_box"];
      var x1 = Math.round(bbox.xmin * this.state.width);
      var x2 = Math.round(bbox.xmax * this.state.width);
      var y1 = Math.round(bbox.ymin * this.state.height);
      var y2 = Math.round(bbox.ymax * this.state.height);
      var text = bbox.label + ": " + this.probabilityToPercentage(data.probability);
      if (!(bbox.index in colorMap)) {
        colorMap[bbox.index] = colors[currentColorIndex];
        currentColorIndex++;
      }
      var color = colorMap[bbox.index];
      return (
        <React.Fragment>
          <Rect
            id={index}
            x={x1}
            y={y1}
            width={x2 - x1}
            height={y2 - y1}
            fillEnabled="false"
            stroke={color}
            strokeWidth={5}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
          {mouseOn === index && <BBoxLabel x={x1} y={y1} text={text} color={color} />}
        </React.Fragment>
      );
    });
  }

  render() {
    if (this.state.width === null) {
      return null;
    } else {
      return (
        <Stage width={window.innerWidth - 372} height={500}>
          {/* <Stage width={width} height={height}> */}
          <Layer>
            {/* For Local Test */}
            {/* <URLImage src="https://i.imgur.com/rZuyMXF.jpg" x={100} y={50} features={this.props.features}/> */}
            <URLImage
              image={this.state.image}
              x={0}
              y={0}
              features={this.props.features}
            />
            {this.renderBBox()}
          </Layer>
        </Stage>
      );
    }
  }
}
