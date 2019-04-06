import React, { Component } from "react";

import { Row, Col, Card } from "antd";
import yeast from "yeast";

export default class Section4 extends Component {
  render() {
    return [
      <Row
        key={yeast()}
        gutter={2}
        type="flex"
        justify="space-around"
        align="middle"
        style={{
          backgroundColor: "white",
        }}
      >
        <Col sm={8} xs={24}>
          <p style={{ color: "white" }}>
            Profiling at different at abstraction levels throughout the entire pipeline
          </p>
          <ul>
            <li>
              <p>TODO</p>
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
            <Card.Meta
              title="Profiling at different at abstraction levels throughout the entire pipelinet"
              description="TODO"
            />
          </Card>
        </Col>
      </Row>,
    ];
  }
}
