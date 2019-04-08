import React, { Component } from "react";

import { Col, Row, Card, Avatar } from "antd";
import QueueAnim from "rc-queue-anim";
import Animate from "rc-animate";
import { TweenOneGroup } from "rc-tween-one";
import withSizes from "react-sizes";
import { withScroll } from "react-fns";
import { MLModelScope } from "@components/Common";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import {
  ModelUser as ModelUserIcon,
  SystemDeveloper as SystemDeveloperIcon,
  ModelDeveloper as ModelDeveloperIcon,
} from "./UserAvatars";
import { ReactComponent as WideChevron } from "./assets/wide_chevron.svg";

const style = {
  background: "linear-gradient(180deg, rgba(25,38,58,1) 60%, rgba(255,255,255,0.8) 80%)",
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

function LearnMore(props) {
  const { y } = props;
  const show = y <= 10;
  return (
    <Animate delay={300} transitionAppear transitionName="fade">
      {show ? (
        <Row
          type="flex"
          justify="space-around"
          align="middle"
          style={{
            ...infoStyle,
            color: "#1A263A",
            textAlign: "center",
          }}
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
      ) : null}
    </Animate>
  );
}

@withScroll
@withSizes(({ width }, { breakpoint }) => ({ isMobile: width < breakpoint }))
class Hero extends Component {
  render() {
    console.log({ ModelDeveloperIcon });
    const { isMobile } = this.props;
    return (
      <div style={style}>
        <QueueAnim type={isMobile ? "bottom" : "left"} delay={300}>
          <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{ paddingTop: "10vh" }}
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
            style={{ paddingBottom: "10vh" }}
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
            gutter={16}
            style={{ paddingBottom: "2rem" }}
          >
            <Col lg={6} md={20} sm={20} xs={20}>
              <Card
                hoverable
                bordered={false}
                title={"Model Users"}
                extra={<a href="#">Learn More</a>}
              >
                <Card.Meta
                  avatar={
                    <div style={{ transform: "translateY(-125px)" }}>
                      <ModelUserIcon />
                    </div>
                  }
                  description={
                    <h3 style={{ color: "#1A263A" }}>
                      Find the best model tailored to your dataset
                    </h3>
                  }
                />
              </Card>
            </Col>
            <Col lg={6} md={20} sm={20} xs={20}>
              <Card
                hoverable
                bordered={false}
                title={"Model Developer"}
                extra={<a href="#">Learn More</a>}
              >
                <Card.Meta
                  avatar={
                    <div style={{ transform: "translateY(-125px)" }}>
                      <ModelDeveloperIcon />
                    </div>
                  }
                />
                Model Developer
              </Card>
            </Col>
            <Col lg={6} md={20} sm={20} xs={20}>
              <Card
                hoverable
                bordered={false}
                title={"System Architects"}
                extra={
                  <a href="#" style={{ fontSize: "12px", fontWeight: 100 }}>
                    Learn More
                  </a>
                }
              >
                <Card.Meta
                  avatar={<SystemDeveloperIcon />}
                  description={
                    <div style={{ color: "#1A263A", fontWeight: 400 }}>
                      Analyse ML workloads across systems, accelerators, and software
                      stacks
                    </div>
                  }
                />
              </Card>
            </Col>
          </Row>
          <LearnMore {...this.props} />
        </QueueAnim>
      </div>
    );
  }
}

export default Hero;
