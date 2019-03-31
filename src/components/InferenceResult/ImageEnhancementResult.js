import React, { Component } from "react";
import read_rawimage_results from "./ReadRawImageResults";

export default class ImageEnhancementResult extends Component {

  render() {
    return(
      <img style={{width: "80%"}} id="item" src={read_rawimage_results(this.props.features)} />
    )
  }
}