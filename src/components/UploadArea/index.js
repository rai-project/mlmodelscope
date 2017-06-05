import React, { Component } from "react";
import { connect } from "cerebral/react";
// eslint-disable-next-line
import { Core, DragDrop, Tus10, Dashboard, Webcam, Informer } from "uppy";

import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

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
      this.addFile = this.addFile.bind(this);
      this.upload = this.upload.bind(this);
      this.onFileAdd = this.onFileAdd.bind(this);
      this.fileAdded = this.fileAdded.bind(this);
      this.state = {
        images: [],
        alert: false
      };
    }
    componentWillUnmount() {
      this.uppy = null;
    }
    componentDidMount() {
      this.uppy = new Core({ debug: true, autoProceed: false });
      this.uppy
        .use(Dashboard, {
          target: this.uppyElement,
          maxHeight: 300,
          inline: true,
          locale: {
            strings: {
              dropPasteImport:
                "Drop images here, paste, import from one of the locations above or",
              dropPaste: "Drop images here, paste or"
            }
          }
        })
        .use(Webcam, { target: Dashboard })
        .use(Informer, { target: Dashboard })
        .use(Tus10, {
          endpoint: "/api/upload/",
          resume: true
        })
        .run();

      this.uppy.addFile2 = this.uppy.addFile;
      this.uppy.addFile = this.addFile;

      this.uppy.on("core:file-add", this.onFileAdd);
      this.uppy.on("file-added", this.fileAdded);
      this.uppy.on("core:upload-success", (fileID, uploadURL) => {
        // console.log(fileID, uploadURL);
        // console.log(uploadURL);
        // console.log(Utils.getFileType);
        // console.log(Utils.getFileType(fileID));
        // this.uppy.addThumbnail(fileID);
        console.log("logging state", this.uppy.state);
        // const newImgArray = this.state.images.slice();
        // newImgArray.push(uploadURL);
        // this.setState({
        //   images: newImgArray,
        // });
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
    addFile(file) {
      console.log("file ", file);
      if (file.type && file.type.split("/")[0] === "image") {
        this.uppy.addFile2({
          source: "React input",
          name: file.name,
          type: file.type,
          alt: file.name,
          data: file.data
        });
      } else {
        this.setState({ alert: true });
      }
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
          <SweetAlert
            show={this.state.alert}
            title="OOPS!"
            text="Please upload an image"
            onConfirm={() => this.setState({ alert: false })}
          />
        </div>
      );
    }
  }
);
