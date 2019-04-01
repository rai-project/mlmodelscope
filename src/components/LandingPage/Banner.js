import React, { Component } from "react";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import withSizes from "react-sizes";

import "./LandingPage.css";

const mapSizesToProps = ({ width }, { breakpoint }) => ({
  isMobile: width < breakpoint,
});

class Banner extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <div className="LandingPage-Banner">
        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <QueueAnim type={isMobile ? "bottom" : "right"} delay={300}>
              <h1
                key="h1"
                style={{
                  fontSize: "36px",
                  color: "white",
                }}
              >
                Reproducible and Uniform Machine Learning Model Evaluation and Profiling
              </h1>
              <p
                key="h2"
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                MLModelScope makes it easier to reproduce, compare and understand accuracy
                or performance claims of models and systems
              </p>
            </QueueAnim>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withSizes(mapSizesToProps)(Banner);
