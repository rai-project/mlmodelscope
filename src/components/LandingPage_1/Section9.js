import "./LandingPage.css";
import { Row, Col, Icon } from "antd";
import React, { Component } from "react";
import Image from "../../resources/landingpage/frontpage_grid_con.svg";

export default class Section9 extends Component {
  render() {
    return (
      <Row
        justify="space-around"
        align="middle"
        gutter={48}
        style={{ backgroundColor: "white", color: "black", minHeight: "50vh" }}
      >
        <Col span={8}>
          <img style={{ marginLeft: "125px", marginTop: "50px" }} src={Image} alt="" />
        </Col>
        <Col span={8} offset={2} style={{ marginTop: "5%" }}>
          <h3 style={{ color: "black", textTransform: "uppercase" }}>Compare</h3>
          <h2
            style={{
              color: "black",
            }}
          >
            Use side by side comparisons, graphs, and tables to draw insights and make an informed
            decision on which tools to use.
          </h2>
          <a
            className="buttonsec6"
            style={{
              textAlign: "left",
              textTransform: "uppercase",
            }}
            href="/"
          >
            COMPARE MODELS <Icon style={{ fontSize: 20 }} size="large" type="arrow-right" />
          </a>
        </Col>
      </Row>
    );
  }
}
