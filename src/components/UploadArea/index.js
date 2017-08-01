import React, { Component } from "react";
import { connect } from "cerebral/react";
// eslint-disable-next-line
import { Core, DragDrop, Tus10, Dashboard, Webcam } from "uppy";

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
      this.upload = this.upload.bind(this);
      this.onFileAdd = this.onFileAdd.bind(this);
      this.fileAdded = this.fileAdded.bind(this);
      this.state = {
        images: []
      };
    }
    componentWillUnmount() {
      this.uppy = null;
    }
    componentDidMount() {
      this.uppy = new Core({
        debug: true,
        autoProceed: false,
        restrictions: {
          maxFileSize: 300000,
          maxNumberOfFiles: 5,
          minNumberOfFiles: 1,
          allowedFileTypes: ["image/*"]
        },
        onBeforeFileAdded: (currentFile, files) => {
          if (currentFile.type && currentFile.type.split("/")[0] === "image") {
            return Promise.resolve();
          }
          return Promise.reject("Invalid file format. Please upload an image");
        },
        onBeforeUpload: files => {
          if (Object.keys(files).length > 1) {
            return Promise.reject("Too many files :(");
          }
          return Promise.resolve();
        }
      });
      this.uppy
        .use(DragDrop, { target: this.uppyElement })
        .use(Dashboard, {
          target: this.uppyElement,
          replaceTargetContent: true,
          maxHeight: 300,
          inline: true,
          note: "Images only, 300kb or less"
        })
        .use(Webcam, { target: Dashboard })
        .use(Tus10, {
          endpoint: "/api/upload/",
          resume: true
        })
        .run();

      this.uppy.on("core:file-add", this.onFileAdd);
      this.uppy.on("file-added", this.fileAdded);
      this.uppy.on("core:upload-success", (fileID, uploadURL) => {
        console.log("logging state", this.uppy.state);
      });

      this.uppy.on("core:success", () => {
        const newProgress = this.uppy.getState().totalProgress;
        console.log("upload progress = " + newProgress);
        this.setState({
          progress: newProgress
        });
      });
    }

    onFileAdd(file) {}
    fileAdded(fileID) {
      console.log("file added ", fileID);
    }

    upload() {
      this.uppy.emitter.emit("core:upload");
    }

    render() {
      return (
        <div style={{ color: "black", minWidth: 0 }}>
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
