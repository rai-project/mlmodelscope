import "./LandingPage.css";
import { Row, Col, Icon } from "antd";
import React, { Component } from "react";
import Image from "../../resources/landingpage/frontpage_grid.svg";

export default class Section8 extends Component {
  render() {
    return (
      <Row
        justify="space-around"
        align="middle"
        gutter={48}
        style={{ backgroundColor: "#1a263a", color: "white", minHeight: "50vh" }}
      >
        <Col span={8}>
          <img style={{ marginLeft: "125px", marginTop: "50px" }} src={Image} alt="" />
        </Col>
        <Col span={8} offset={2} style={{ marginTop: "5%" }}>
          <h3 style={{ color: "white", textTransform: "uppercase" }}>EXPERIMENT</h3>
          <h2 style={{ color: "white" }}>
            Discover the most efficient frameworks, models and hardware for your specific
            experiment.
          </h2>
          <a
            className="buttonsec6"
            style={{
              textAlign: "left",
              textTransform: "uppercase",
            }}
            href="/experiment"
          >
            START EXPERIMENTATION <Icon style={{ fontSize: 20 }} size="large" type="arrow-right" />
          </a>
        </Col>
      </Row>
    );
  }
}