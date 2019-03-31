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
        gutter={{ sm: 48, xs: 0 }}
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Col sm={8} xs={24}>
          <img className="LandingPage-img" src={Image} alt="" />
        </Col>
        <Col sm={{ span: 8, offset: 2 }} xs={{ span: 24 }} style={{ marginTop: "5%", padding: "5%" }}>
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
