import React, { Component } from "react";
import { Carousel } from "antd";
import yeast from "yeast";

var news_images = require.context("../../resources/news", true);

export default class News extends Component {
  render() {
    return (
      <Carousel autoplay>
        {this.props.images.map(src => {
          return <img key={yeast()} alt="" src={news_images("./" + src)} />;
        })}
      </Carousel>
    )
  }
}