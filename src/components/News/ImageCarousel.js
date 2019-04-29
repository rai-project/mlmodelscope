import React, { Component } from "react";
import { Carousel } from "antd";
import Iframe from "react-iframe";
import yeast from "yeast";

var news_images = require.context("../../resources/news", true);

export default class News extends Component {
  render() {
    var contents = [];
    this.props.images.map(src => {
      contents.push(<img key={yeast()} alt="" src={news_images("./" + src)} />);
    })
    console.log(this.props)
    this.props.videos.map(src => {
      contents.push(<Iframe position="relative" url={src} width="100%" height="300px" allowFullScreen={true} onClick={() => {return;}}/>)
      console.log(src)
    })
    return (
      <Carousel autoplay dots="false">
        {contents}
      </Carousel>
    )
  }
}