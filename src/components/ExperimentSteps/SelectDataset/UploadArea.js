import React, { Component } from "react";
import { ExperimentContext } from "../../../context/ExperimentContext"; // eslint-disable-line
import { Dashboard } from "@uppy/react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style-loader!css-loader!uppy/dist/uppy.min.css";

const Uppy = require("@uppy/core");
const Tus = require("@uppy/tus");
const Webcam = require("@uppy/webcam");

export default class UploadArea extends Component {
  constructor(props) {
    super(props);
    this.uppy = Uppy({ restrictions: { maxNumberOfFiles: 5 } });
    this.uppy.use(Tus, { endpoint: "/api/upload", resume: true }).use(Webcam);
  }

  render() {
    return (
      <div style={{ marginTop: "40px", color: "black", minWidth: 0 }}>
        <Dashboard plugins={["Tus", "Webcam"]} uppy={this.uppy} />
      </div>
    );
  }
}
