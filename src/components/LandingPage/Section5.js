import React, { Component } from "react";
import { Row, Col } from "antd";

import "./LandingPage.css";

export default class Section5 extends Component {
  render() {
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Col span={9}>
          <h2 style={{ marginTop: "20px", color: "black", textAlign: "center" }}>
            A common platform that shields heterogeneity (frameworks, datasets, models, hardware
            configurations) away from you so that you can focus on what you need to accomplish.{" "}
          </h2>
        </Col>
      </Row>
    );
  }
}
