import React, { Component } from "react";

import { Row, Col } from "antd";
import yeast from "yeast";

export default class Section9 extends Component {
  render() {
    return [
      <Row
        key={yeast()}
        type="flex"
        justify="space-around"
        align="middle"
        style={{
          backgroundColor: "white",
        }}
      >
        <Col span={8} sm={8} xs={24}>
          <p
            style={{
              fontSize: "20pt",
              marginTop: "20px",
              color: "#19263a",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Try MLModelScope
          </p>
        </Col>
      </Row>,
      <Row
        key={yeast()}
        type="flex"
        justify="space-around"
        align="middle"
        style={{
          backgroundColor: "white",
        }}
      >
        <Col span={8} sm={8} xs={24}>
          <p
            style={{
              fontSize: "20pt",
              marginTop: "20px",
              color: "#19263a",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Contribute
          </p>
        </Col>
      </Row>,
    ];
  }
}
