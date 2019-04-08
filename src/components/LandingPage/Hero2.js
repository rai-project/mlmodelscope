import React, { Component } from "react";

import { Col, Row } from "antd";
import QueueAnim from "rc-queue-anim";
import withSizes from "react-sizes";
import { withScroll } from "react-fns";
import Color from "color";
import { Link } from "react-router-dom";

const primaryColor = "#1A263A";

const style = {
  // background: "linear-gradient(180deg, rgba(25,38,58,1) 60%, rgba(255,255,255,0.8) 80%)",
  background: primaryColor,
  minHeight: "50vh",
  width: "100%",
  color: "white",
  fontWeight: "200",
  backgroundSize: "100%",
  paddingTop: "100px",
  paddingBottom: "1.5rem",
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

@withScroll
@withSizes(({ width }, { breakpoint }) => ({ isMobile: width < breakpoint }))
class Hero extends Component {
  render() {
    const lightPrimary = Color(primaryColor)
      .lighten(0.5)
      .hex();
    const darkerPrimary = Color(primaryColor)
      .darken(0.5)
      .hex();
    const { isMobile } = this.props;
    return (
      <div style={style}>
        <QueueAnim type={isMobile ? "bottom" : "left"} delay={300}>
          <Row type="flex" justify="start" style={{ paddingTop: "5vh" }}>
            <Col
              lg={{ span: 18, offset: 2 }}
              xs={{ span: 20, offset: 1 }}
              style={{
                fontSize: "4.5rem",
                fontWeight: 800,
                color: "white",
                textAlign: "left",
                textShadow: `5px 5px ${lightPrimary}`,
              }}
            >
              Reproduce and Analyze Diverse Machine Learning Workloads
            </Col>
          </Row>
          <Row
            type="flex"
            justify="start"
            gutter={16}
            style={{ marginTop: "3rem", marginLeft: "10px" }}
          >
            <Col
              lg={{ span: 4, offset: 2 }}
              xs={{ span: 20, offset: 1 }}
              style={{
                fontSize: "1.5rem",
                backgroundColor: lightPrimary,
                borderColor: lightPrimary,
                borderStyle: "dashed",
                padding: "10px",
              }}
            >
              <Link to="http://docs.mlmodelscope.org" style={{ color: "white" }}>
                Learn More
              </Link>
            </Col>
            {isMobile ? null : (
              <React.Fragment>
                <Col
                  lg={{ span: 4, offset: 0 }}
                  xs={{ span: 20, offset: 1 }}
                  style={{
                    fontSize: "1.5rem",
                    backgroundColor: lightPrimary,
                    borderColor: lightPrimary,
                    borderStyle: "dashed",
                    marginLeft: "10px",
                    padding: "10px",
                  }}
                >
                  <Link to="http://docs.mlmodelscope.org" style={{ color: "white" }}>
                    Get Started
                  </Link>
                </Col>
                <Col
                  lg={{ span: 4, offset: 0 }}
                  xs={{ span: 20, offset: 1 }}
                  style={{
                    fontSize: "1.5rem",
                    backgroundColor: lightPrimary,
                    borderColor: lightPrimary,
                    borderStyle: "dashed",
                    marginLeft: "10px",
                    padding: "10px",
                  }}
                >
                  <Link to="/experiment" style={{ color: "white" }}>
                    Demo
                  </Link>
                </Col>
              </React.Fragment>
            )}
          </Row>
        </QueueAnim>
      </div>
    );
  }
}

export default Hero;
