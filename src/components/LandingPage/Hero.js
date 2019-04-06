import "./LandingPage.css";
import { Col, Row, Icon } from "antd";
import QueueAnim from "rc-queue-anim";
import React, { Component } from "react";
import withSizes from "react-sizes";
import { MLModelScope } from "@components/Common";

const style = {
  background: "#19263a",
  // background:
  // "linear-gradient(180deg, rgba(25,38,58,1) 31%, rgba(25,38,58,0.9220063025210083) 71%, rgba(25,38,58,0.8) 85%, rgba(255,255,255,0) 100%)",
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
  height: "40px",
  position: "fixed",
  bottom: "2%",
  width: "100%",
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
        <h1 style={infoStyle}>
          Learn More
          <br />
          <Icon type="down" width={"4.5rem"} height={"1.5rem"} />
        </h1>
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
        </QueueAnim>
      </div>
    );
  }
}

export default Hero;
