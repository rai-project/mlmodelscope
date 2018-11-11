import "./LandingPage.css";
import { Row, Col, Icon } from "antd";
import React, { Component } from "react";
import Image from "../../resources/landingpage/frontpage_circle.svg";

export default class Section7 extends Component {
  render() {
    return (
      <Row
        justify="space-around"
        align="middle"
        gutter={48}
        style={{ backgroundColor: "white", color: "black", minHeight: "50vh" }}
      >
        <Col span={8}>
          <img style={{ marginLeft: "125px", marginTop: "50px" }} src={Image} alt="" />
        </Col>
        <Col span={8} offset={2} style={{ marginTop: "5%" }}>
          <h3 style={{ color: "black", textTransform: "uppercase" }}>No Setup</h3>
          <h2
            style={{
              color: "black",
            }}
          >
            Take away the pain of comparing tools by eliminating the cumbersome installation process
            and the stress of sorting dependencies.
          </h2>
          <a
            className="buttonsec6"
            style={{
              textAlign: "left",
              textTransform: "uppercase",
            }}
            href="/experiment"
          >
            EXPLORE ENVIRONMENT <Icon style={{ fontSize: 20 }} size="large" type="arrow-right" />
          </a>
        </Col>
      </Row>
    );
  }
}
