import React, { Component } from "react";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";
import { Element } from "rc-scroll-anim";
import { Link } from "react-router-dom";
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
        <QueueAnim type={isMobile ? "bottom" : "right"} delay={300}>
          <h1
            key="h1"
            style={{
              fontSize: "40px",
              color: "white",
            }}
          >
            Reproducible and Uniform Machine Learning Model Evaluation and Profiling
            Platform
          </h1>
          <p
            key="h2"
            style={{
              fontSize: "20px",
              color: "white",
            }}
          >
            MLModelScope makes it easier to reproduce, compare and understand accuracy or
            performance claims of models and systems
          </p>
        </QueueAnim>
      </div>
    );
  }
}

export default withSizes(mapSizesToProps)(Banner);
