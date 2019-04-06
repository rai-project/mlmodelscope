import React, { Component } from "react";

import { Row, Col } from "antd";
import yeast from "yeast";
import { MLModelScope } from "@components/Common";

export default class WhatIsMLModelScope extends Component {
  render() {
    return [
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        key={yeast()}
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
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            What is MLModelScope?
          </p>
        </Col>
      </Row>,
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        key={yeast()}
        style={{
          color: "white",
          paddingTop: "20px",
          fontWeight: "200",
          backgroundColor: "#19263a",
        }}
      >
        <Col span={14} sm={14} xs={20}>
          <p
            style={{
              fontSize: "16pt",
              textAlign: "center",
            }}
          >
            <MLModelScope /> is an <b>open source</b> model evaluation and profiling
            platform that <b>shields heterogeneity</b> (models, datasets, frameworks,
            hardware configurations) away. This one-stop platform is designed to enable{" "}
            <b>machine learning application, model, and system developers</b> to quickly
            discover, evaluate, benchmark combinations of models, frameworks, hardware
            configurations and profile experiments in depth
          </p>
        </Col>
      </Row>,
    ];
  }
}
