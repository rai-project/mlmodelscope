import React, { Component } from "react";

import { Row, Col, Card } from "antd";
import yeast from "yeast";

export default class Section7 extends Component {
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
            <Card.Meta title="Web and command line interface" description="TODO" />
          </Card>
        </Col>
        <Col sm={8} xs={24}>
          <p style={{ color: "white" }}>Web and command line interface</p>
          <ul>
            <li>
              <p>
                The web interface allows users to evaluate models with minimal
                understanding of the underlying stack
              </p>
            </li>
            <li>
              <p>
                Command line. Users who wish to integrate CarML within their existing
                tools or pipelines can use the REST or RPC APIs.
              </p>
            </li>
            <li>
              <p>
                Standalone library. CarML can also be compiled to a standalone library and
                used within users’ C/C++, Python, or Java applications.
              </p>
            </li>
          </ul>
        </Col>
      </Row>,
    ];
  }
}
