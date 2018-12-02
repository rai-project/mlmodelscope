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
        gutter={{ sm: 48, xs: 0 }}
        style={{ backgroundColor: "white", color: "black", minHeight: "50vh" }}
      >
        <Col sm={8} xs={24}>
          <img className="LandingPage-img" src={Image} alt="" />
        </Col>
        <Col sm={{ span: 8, offset: 2 }} xs={{ span: 24 }} style={{ marginTop: "5%", padding: "5%"}}>
          <h3 style={{ color: "black", textTransform: "uppercase" }}>Compare</h3>
          <h2 style={{ color: "black" }}>
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
