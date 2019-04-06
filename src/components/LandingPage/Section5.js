import React, { Component } from "react";

import { Row, Col, Card } from "antd";
import yeast from "yeast";

export default class Section5 extends Component {
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
          <Card
            hoverable
            cover={
              <img alt="image1" style={{ width: "100%" }} src="/static/images/TODO.jpg" />
            }
          >
            <Card.Meta title="Hardware/Software Agnostic" description="TODO" />
          </Card>
        </Col>
        <Col sm={8} xs={24}>
          <p style={{ color: "white" }}>Hardware/Software Agnostic</p>
          <ul>
            <li>
              <p>
                Supports common frameworks, TensorFlow, PyTorch, MXNet, Caffe2, TensorRT,
                Caffe, and CNTK
              </p>
            </li>
            <li>
              <p>Runs on ARM, Power, and x86 with CPU, GPU, and FPGA</p>
            </li>
            <li>
              <p>Linux and macOS</p>
            </li>
          </ul>
        </Col>
      </Row>,
    ];
  }
}
