import React, { Component } from "react";
import { Row, Col, Typography, Carousel } from "antd";
import LightBox from "./LightBox";
import ImageCarousel from "./ImageCarousel";
import yeast from "yeast";
import withSizes from "react-sizes";
import Panel, { Link, LearnMoreButton as LearnMore } from "../Panel";

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

@withSizes(({ width }) => ({ isMobile: width < 1010 }))
export default class News extends Component {
  render() {
    console.log(this.props.isMobile)
    return (
      <React.Fragment>
        <Panel
          isMobile={this.props.isMobile}
          style={{
            marginTop: "4rem",
          }}
          position="right"
          title={this.props.data.title}
          icon={
            (this.props.data.images.length > 0 || this.props.data.videos.length > 0) &&
              <div
                onClick={() => (document.getElementById("myModal"+this.props.index.toString()).style.display = "block")}
              >
              <ImageCarousel
                images={this.props.data.images}
                videos={this.props.data.videos || []}
              /></div>
          }
          iconSize={6}
          link={<LearnMore link={this.props.data.link} />}
        >
          {dateToYMD(new Date(this.props.data.date)) + "\n" + this.props.data.content}
        </Panel>
        <LightBox
          images={this.props.data.images}
          videos={this.props.data.videos || []}
          index={this.props.index}
        />
      </React.Fragment>
    );
  }
}
