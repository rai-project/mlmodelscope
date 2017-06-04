import React, { Component } from "react";
import { connect } from "cerebral/react";
// eslint-disable-next-line
import { Core, DragDrop, Tus10, Dashboard, Webcam, Informer } from "uppy";

// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style-loader!css-loader!uppy/dist/uppy.min.css";

export default connect(
  {
    // // eslint-disable-next-line
    // isLoggedIn: state`app.userIsLoggedIn`,
    // // eslint-disable-next-line
    // activePage: state`app.activePage`,
  },
  class UploadArea extends Component {
    constructor() {
      super();
      this.state = {
        images: []
      };
    }
    componentWillUnmount() {
      this.uppy = null;
    }
    componentDidMount() {
      this.uppy = new Core({ debug: true, autoProceed: false });
      this.uppy
        .use(Dashboard, { target: this.uppyElement, inline: true })
        .use(Webcam, { target: Dashboard })
        .use(Informer, { target: Dashboard })
        .use(Tus10, {
          endpoint: "/api/upload/",
          resume: true
        })
        .run();

      this.addFile = this.addFile.bind(this);
      this.upload = this.upload.bind(this);

      this.uppy.on("core:upload-success", (fileID, uploadURL) => {
        console.log(fileID, uploadURL);
        this.uppy.addThumbnail(fileID);
        console.log("logging state", this.uppy.state);
        const newImgArray = this.state.images.slice();
        newImgArray.push(uploadURL);
        this.setState({
          images: newImgArray
        });
      });

      this.uppy.on("core:success", () => {
        const newProgress = this.uppy.getState().totalProgress;
        console.log("upload progress = " + newProgress);
        this.setState({
          progress: newProgress
        });
      });
    }

    addFile(ev) {
      const files = Array.from(ev.target.files);
      files.forEach(file => {
        this.uppy.addFile({
          source: "React input",
          name: file.name,
          type: file.type,
          alt: file.name,
          data: file
        });
      });
    }

    upload() {
      this.uppy.emitter.emit("core:upload");
    }

    render() {
      return (
        <div style={{ color: "black", minWidth: 0 }}>
          <h4>{this.state.progress || null}</h4>
          {this.state.images.map(img => {
            return <img width="300" src={img} alt={img.alt} />;
          })}
          <div
            ref={node => {
              this.uppyElement = node;
            }}
          />
        </div>
      );
    }
  }
);
