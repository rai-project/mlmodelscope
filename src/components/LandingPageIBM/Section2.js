import React, { Component } from "react";
import { Row, Col } from "antd";

import "./LandingPage.css";

export default class Section2 extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={9}>
            <p
              style={{
                fontSize: "15pt",
                textTransform: "uppercase",
                marginTop: "40px",
                color: "black",
                textAlign: "center",
              }}
            >
              Test Machine Learning and Deep Learning Models Under Different Hardware Configuration
            </p>
          </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={12}>
            <p style={{ fontSize: "12pt", marginTop: "20px", color: "black" }}>
              The one-stop open platform designed to spur innovation by enabling machine learning
              developers, users, and system optimizers to quickly find, test, deploy, and benchmark
              combinations of models, frameworks and hardware configurations.
            </p>
          </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col>
            <p style={{ fontSize: "8pt", marginTop: "10px", color: "#0FACAC" }}>
              <a href="docs.mlmodelscope.org">LEARN MORE</a>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
