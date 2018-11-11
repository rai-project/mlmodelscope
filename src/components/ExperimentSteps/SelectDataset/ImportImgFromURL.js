import React, { Component } from "react";
import { Icon, Input } from "antd";
import { ExperimentContext } from "../../../context/ExperimentContext";

export default class ImportImgFromURL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURLs: [],
    };
  }

  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <ExperimentContext.Consumer>
          {context => (
            <Input
              id="urlInput"
              addonAfter={
                <Icon
                  type="plus"
                  onClick={() => context.addUrl(document.getElementById("urlInput").value)}
                />
              }
              defaultValue="http://ww4.hdnux.com/photos/41/15/35/8705883/4/920x920.jpg"
              onPressEnter={e => context.addUrl(e.target.value)}
            />
          )}
        </ExperimentContext.Consumer>
        <ExperimentContext.Consumer>
          {context =>
            context.imageUrls.map(url => (
              <div key={`url-${url}`} style={{ width: "100%", textAlign: "center" }}>
                {url}
              </div>
            ))
          }
        </ExperimentContext.Consumer>
      </div>
    );
  }
}
