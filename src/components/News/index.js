import React, { Component } from "react";
import { Row, Col, Typography, Carousel } from "antd";
import LightBox from "./LightBox";
import yeast from "yeast";

var news_images = require.context("../../resources/news", true);

function dateToYMD(date) {
  var strArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var d = date.getDate();
  var m = strArray[date.getMonth()];
  var y = date.getFullYear();
  return m + " " + (d <= 9 ? "0" + d : d) + ", " + y;
}

export default class News extends Component {
  render() {
    return (
      <React.Fragment
        style={{
          backgroundColor: "white",
        }}
      >
        <Row type="flex" aligh="middle">
          <Col sm={24} md={12} lg={8}>
            <Carousel autoplay>
              {this.props.data.images.map(src => {
                return <img key={yeast()} alt="" src={news_images("./" + src)} />;
              })}
            </Carousel>
          </Col>
          <Col sm={24} md={10} lg={14} offset={2}>
            <Row>
              <Typography.Title>{this.props.data.title}</Typography.Title>
            </Row>
            <Row>
              <Typography.Title level={3}>
                {dateToYMD(new Date(this.props.data.date))}
              </Typography.Title>
            </Row>
            <Row>
              <Typography.Text>{this.props.data.content}</Typography.Text>
            </Row>
            <Row>
              <Typography.Text>
                <a href={this.props.data.link}>Learn More</a>
              </Typography.Text>
            </Row>
          </Col>
        </Row>
        {/* <Row type="flex" aligh="middle" style={{ marginTop: "20px" }}>
          <Col sm={24} md={12} lg={8}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Typography.Title level={3} style={{ textAlign: "center" }}>
                Posters
              </Typography.Title>
            </div>
          </Col>
          <Col sm={24} md={10} lg={14} offset={2}>
            <LightBox images={this.props.data.posters} />
          </Col>
        </Row> */}
      </React.Fragment>
    );
  }
}
