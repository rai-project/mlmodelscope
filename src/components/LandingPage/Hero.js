import "./LandingPage.css";
import { Col, Row, Icon } from "antd";
import QueueAnim from "rc-queue-anim";
import React, { Component } from "react";
import withSizes from "react-sizes";
import { MLModelScope } from "@components/Common";
import { ReactComponent as WideChevron } from "./assets/wide_chevron.svg";

const style = {
  background:
    "linear-gradient(180deg, rgba(25,38,58,1) 31%, rgba(25,38,58,0.9220063025210083) 71%, rgba(25,38,58,0.8) 85%)",
  minHeight: "100vh",
  width: "100%",
  color: "white",
  fontWeight: "200",
  backgroundSize: "100%",
  paddingTop: "100px",
  textAlign: "center",
};

const infoStyle = {
  position: "absolute",
  top: "100vh",
  transform: "translateY(-300%)",
  width: "100%",
  height: "40px",
  color: "white",
  fontSize: "1.5rem",
  opacity: "1",
};

@withSizes(({ width }, { breakpoint }) => ({ isMobile: width < breakpoint }))
class Hero extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <div style={style}>
        <QueueAnim type={isMobile ? "bottom" : "left"} delay={300}>
          <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{ paddingTop: "20vh" }}
          >
            <Col sm={12} xs={12}>
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                <MLModelScope />
              </h1>
              <h1
                style={{
                  fontSize: "2rem",
                  fontWeight: 600,
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
            <Col sm={16} xs={18}>
              <p
                key="h2"
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                }}
              >
                Compare and analyze accuracy and performance across models and systems in
              </p>
            </Col>
          </Row>
          <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{ ...infoStyle, textAlign: "center" }}
          >
            <Col sm={8} xs={8}>
              Learn More
              <br />
              <WideChevron
                style={{
                  width: "3rem",
                  objectFit: "cover",
                  overflow: "visible",
                  transform: "translate(-4.5rem,-2rem)",
                }}
              />
            </Col>
          </Row>
        </QueueAnim>
      </div>
    );
  }
}

export default Hero;
