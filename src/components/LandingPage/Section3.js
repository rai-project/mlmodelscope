import "./LandingPage.css";
import { List, Row, Col, Card } from "antd";
import React, { Component } from "react";

export default class Section3 extends Component {
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
          <Card
            hoverable
            cover={
              <img alt="image1" style={{ width: "100%" }} src="/static/images/TODO.jpg" />
            }
          >
            <Card.Meta title="Local and remote system measurement" description="TODO" />
          </Card>
        </Col>
        <Col sm={8} xs={24}>
          <p>Local and remote system measurement</p>
          <ul>
            <li>
              <p>Mesure models running on either local or remote systems</p>
            </li>
            <li>
              <p>
                Parallel evaluation (multiple instantiations of the same experiment set-up
                across systems)
              </p>
            </li>
            <li>
              <p>
                Can run experiments behind firewall, not exposing model weights or machine
                specification
              </p>
            </li>
          </ul>
        </Col>
      </Row>,
    ];
  }
}
