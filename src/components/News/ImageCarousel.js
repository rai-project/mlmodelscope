import React, { Component } from "react";
import { Row, Col, Carousel } from "antd";
import yeast from "yeast";

var news_images = require.context("../../resources/news", true);

export default class News extends Component {
  render() {
    return (
      <Col sm={24} md={12} lg={8}>
        <Carousel autoplay>
          {this.props.images.map(src => {
            return <img key={yeast()} alt="" src={news_images("./" + src)} />;
          })}
        </Carousel>
      </Col>
    );
  }
}
