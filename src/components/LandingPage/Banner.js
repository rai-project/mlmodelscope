import "./LandingPage.css";

import { Col, Row } from "antd";
import QueueAnim from "rc-queue-anim";
import React, { Component } from "react";
import withSizes from "react-sizes";

const mapSizesToProps = ({ width }, { breakpoint }) => ({
  isMobile: width < breakpoint,
});

class Banner extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <div className="LandingPage-Banner">
        <QueueAnim type={isMobile ? "bottom" : "left"} delay={300}>
          <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{ paddingTop: "20vh" }}
          >
            <Col sm={8} xs={12}>
              <h1
                key="h1"
                style={{
                  fontSize: "35px",
                  color: "white",
                }}
              >
                Reproducible Machine Learning Evaluation
              </h1>
            </Col>
          </Row>
          <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{ paddingBottom: "30vh" }}
          >
            <Col sm={12} xs={18}>
              <p
                key="h2"
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                <b>MLModelScope</b> allows you to reproduce, compare, and analyze accuracy
                and performance claims across models and systems
              </p>
            </Col>
          </Row>
        </QueueAnim>
      </div>
    );
  }
}

export default withSizes(mapSizesToProps)(Banner);
