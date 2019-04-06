import React, { Component } from "react";

import { Row, Col, Card } from "antd";
import yeast from "yeast";

export default class Section8 extends Component {
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
          <p style={{ color: "white" }}>Built-in models and datasets</p>
          <ul>
            <li>
              <p>Common models and datasets are built-in</p>
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
            <Card.Meta title="Built-in models and datasets" description="TODO" />
          </Card>
        </Col>
      </Row>,
    ];
  }
}
