import React, { Component } from "react";
import { connect } from "cerebral/react";
// eslint-disable-next-line
import { Core, DragDrop, Tus10, Dashboard, Webcam } from "uppy";

// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style-loader!css-loader!uppy/dist/uppy.min.css";

export default connect(
  {},
  class UploadArea extends Component {
    componentWillUnmount() {
      this.uppy = null;
    }
    onUploadSuccess(files) {
      console.log("onSuccess not registered");
    }
    componentDidMount() {
      this.uppy = new Core({
        debug: true,
        autoProceed: false,
        restrictions: {
          maxFileSize: 600000,
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
            return Promise.reject("Only one file is allowed");
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
          note: "Images only"
        })
        .use(Webcam, { target: Dashboard })
        .use(Tus10, {
          endpoint: "/api/upload/",
          resume: true
        })
        .run();

      const onUploadSuccess =
        this.props.onUploadSuccess || this.onUploadSuccess;
      this.uppy.on("core:success", fileList => {
        console.log(this.uppy.state);
        onUploadSuccess(this.uppy.state.files);
        console.log({ fileList });
      });
    }

    render() {
      return (
        <div style={{ color: "black", minWidth: 0 }}>
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
