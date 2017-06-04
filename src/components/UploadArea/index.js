import React, { Component } from "react";
import Dropzone from "react-dropzone";

export default class Upload extends Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop.bind(this)}>
          <p>Drag your dataset here</p>
          <p>(or click browse)</p>
        </Dropzone>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.files.map(f => <li>{f.name} - {f.size} bytes</li>)}
          </ul>
        </aside>
      </div>
    );
  }
}
