import React, { Component } from "react";
import { Row, Col } from "antd";

export default class Section0 extends Component {
  render() {
    return [
      <Row
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
            What is MLModelScope?
          </p>
        </Col>
      </Row>,
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{
          backgroundColor: "white",
        }}
      >
        <Col span={16} sm={16} xs={24}>
          <p
            style={{
              fontSize: "16pt",
              color: "#1A263A",
              textAlign: "center",
            }}
          >
            MLModelScope is a <b>open source</b> reproducible model evaluation and
            profiling platform that <b>shields heterogeneity</b> (models, datasets,
            frameworks, hardware configurations) away. This one-stop platform is designed
            to enable <b>machine learning application, model, and system developers</b> to
            quickly discover, evaluate, benchmark combinations of models, frameworks,
            hardware configurations and profile experiments in depth
          </p>
        </Col>
      </Row>,
    ];
  }
}
