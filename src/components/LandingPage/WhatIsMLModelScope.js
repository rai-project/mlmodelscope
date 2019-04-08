import React, { Component } from "react";

import { Row as AntdRow, Col, Divider as AntDivider } from "antd";
import yeast from "yeast";
import { MLModelScope } from "@components/Common";
import {
  ModelUser as ModelUserIcon,
  SystemDeveloper as SystemDeveloperIcon,
  ModelDeveloper as ModelDeveloperIcon,
} from "./UserAvatars";

const Row = function({ style, justify, children }) {
  style = style || {};
  return (
    <AntdRow
      type="flex"
      justify={justify || "start"}
      align="middle"
      style={{
        marginLeft: "1rem",
        color: "#5a5a5a",
        ...style,
      }}
    >
      {children}
    </AntdRow>
  );
};

const Divider = function() {
  return (
    <Row>
      <Col lg={{ span: 18, offset: 2 }} xs={{ span: 20, offset: 1 }}>
        <AntDivider />
      </Col>
    </Row>
  );
};

export default class WhatIsMLModelScope extends Component {
  render() {
    return (
      <React.Fragment>
        <Row
          style={{
            marginTop: "4rem",
            fontSize: "1.5rem",
            fontWeight: "300",
          }}
        >
          <Col lg={{ span: 14, offset: 2 }} xs={{ span: 10, offset: 1 }}>
            <p style={{ fontSize: "2.8rem", fontWeight: 500 }}>
              Built for ML Evaluation.
            </p>
            MLModelScope Provides a consistent evaluation, aggregation, and reporting
            system by defining techniques to specify and provision workflows with HW/SW
            stacks abstractions for evaluation and profiling using different frameworks
            data consumption for evaluation outputs
          </Col>
          <Col lg={{ span: 4, offset: 1 }} xs={{ span: 8, offset: 0 }}>
            <ModelUserIcon width="10rem" height="10rem" />
          </Col>
        </Row>
        <AntDivider />

        <Row
          style={{
            marginTop: "4rem",
            fontSize: "1.5rem",
            fontWeight: "300",
          }}
        >
          <Col lg={{ span: 4, offset: 2 }} xs={{ span: 8, offset: 1 }}>
            <ModelUserIcon width="10rem" height="10rem" />
          </Col>
          <Col lg={{ span: 14, offset: 0 }} xs={{ span: 10, offset: 0 }}>
            <p style={{ fontSize: "2.8rem", fontWeight: 500 }}>
              Built for ML Evaluation.
            </p>
            MLModelScope Provides a consistent evaluation, aggregation, and reporting
            system by defining techniques to specify and provision workflows with HW/SW
            stacks abstractions for evaluation and profiling using different frameworks
            data consumption for evaluation outputs
          </Col>
        </Row>
        <AntDivider />

        <Row
          style={{
            marginTop: "4rem",
            fontSize: "1.5rem",
            fontWeight: "300",
          }}
        >
          <Col lg={{ span: 14, offset: 2 }} xs={{ span: 10, offset: 1 }}>
            <p style={{ fontSize: "2.8rem", fontWeight: 500 }}>
              Built for ML Evaluation.
            </p>
            MLModelScope Provides a consistent evaluation, aggregation, and reporting
            system by defining techniques to specify and provision workflows with HW/SW
            stacks abstractions for evaluation and profiling using different frameworks
            data consumption for evaluation outputs
          </Col>
          <Col lg={{ span: 4, offset: 1 }} xs={{ span: 8, offset: 0 }}>
            <ModelUserIcon width="10rem" height="10rem" />
          </Col>
        </Row>
        <AntDivider />

        <Row
          style={{
            marginTop: "4rem",
            fontSize: "1.5rem",
            fontWeight: "300",
          }}
        >
          <Col lg={{ span: 4, offset: 2 }} xs={{ span: 8, offset: 1 }}>
            <ModelUserIcon width="10rem" height="10rem" />
          </Col>
          <Col lg={{ span: 14, offset: 0 }} xs={{ span: 10, offset: 0 }}>
            <p style={{ fontSize: "2.8rem", fontWeight: 500 }}>
              Built for ML Evaluation.
            </p>
            MLModelScope Provides a consistent evaluation, aggregation, and reporting
            system by defining techniques to specify and provision workflows with HW/SW
            stacks abstractions for evaluation and profiling using different frameworks
            data consumption for evaluation outputs
          </Col>
        </Row>
        <AntDivider />

        <Row
          style={{
            marginTop: "4rem",
            fontSize: "1.5rem",
            fontWeight: "300",
          }}
        >
          <Col lg={{ span: 14, offset: 2 }} xs={{ span: 10, offset: 1 }}>
            <p style={{ fontSize: "2.8rem", fontWeight: 500 }}>
              Built for ML Evaluation.
            </p>
            MLModelScope Provides a consistent evaluation, aggregation, and reporting
            system by defining techniques to specify and provision workflows with HW/SW
            stacks abstractions for evaluation and profiling using different frameworks
            data consumption for evaluation outputs
          </Col>
          <Col lg={{ span: 4, offset: 1 }} xs={{ span: 8, offset: 0 }}>
            <ModelUserIcon width="10rem" height="10rem" />
          </Col>
        </Row>
        <AntDivider />

        <Row
          style={{
            marginTop: "4rem",
            fontSize: "1.5rem",
            fontWeight: "300",
          }}
        >
          <Col lg={{ span: 4, offset: 2 }} xs={{ span: 8, offset: 1 }}>
            <ModelUserIcon width="10rem" height="10rem" />
          </Col>
          <Col lg={{ span: 14, offset: 0 }} xs={{ span: 10, offset: 0 }}>
            <p style={{ fontSize: "2.8rem", fontWeight: 500 }}>
              Built for ML Evaluation.
            </p>
            MLModelScope Provides a consistent evaluation, aggregation, and reporting
            system by defining techniques to specify and provision workflows with HW/SW
            stacks abstractions for evaluation and profiling using different frameworks
            data consumption for evaluation outputs
          </Col>
        </Row>
        <AntDivider />
      </React.Fragment>
    );
  }
}
