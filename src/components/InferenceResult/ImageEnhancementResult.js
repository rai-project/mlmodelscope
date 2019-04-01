import React, { Component } from "react";

export default class ImageEnhancementResult extends Component {
  render() {
    return(
      <img
        style={{width: "80%", marginLeft: "auto", marginRight: "auto"}}
        id="item"
        src={"data:image/jpeg;base64,"+this.props.features[0].raw_image.jpeg_data}
      />
    )
  }
}