import "./LandingPage.css";
import { List, Row, Col, Card } from "antd";
import React, { Component } from "react";

export default class Section2 extends Component {
  render() {
    return [
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{
          backgroundColor: "white", //"#E94A37",
        }}
      >
        <Col sm={8} xs={24}>
          <p
            style={{
              fontSize: "20pt",
              marginTop: "20px",
              color: "#19263a", //"white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Why MLModelScope?
          </p>
        </Col>
      </Row>,
      <Row
        gutter={2}
        type="flex"
        justify="space-around"
        align="middle"
        style={{
          backgroundColor: "white",
        }}
      >
        <Col sm={8} xs={24}>
          <p>Reproducibility and Consistency</p>
          <ul>
            <li>
              <p>Model manifest defines model evaluation and hardware configuration</p>
            </li>
            <li>
              <p>Docker defines the software stack</p>
            </li>
            <li>
              <p>Unified inference pipeline across dataset/framework/system</p>
            </li>
            <li>
              <p>All assets are versioned using semantic versioning</p>
            </li>
          </ul>
        </Col>
        <Col sm={8} xs={24}>
          <Card
            hoverable
            cover={
              <img alt="image1" style={{ width: "100%" }} src="/static/images/TODO.jpg" />
            }
          >
            <Card.Meta title="Reproducibility and Consistency" description="TODO" />
          </Card>
        </Col>
      </Row>,
    ];
  }
}
