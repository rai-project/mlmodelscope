import "./LandingPage.css";
import { List, Row, Col, Card } from "antd";
import React, { Component } from "react";

export default class Section6 extends Component {
  render() {
    return [
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
          <p style={{ color: "white" }}>Extensible and Customizable</p>
          <ul>
            <li>
              <p>Built from a set of modular components, easy to customize</p>
            </li>
            <li>
              <p>
                Easy to extend by adding models, frameworks, processing functions, and
                profilers
              </p>
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
            <Card.Meta title="Extensible and Customizable" description="TODO" />
          </Card>
        </Col>
      </Row>,
    ];
  }
}
