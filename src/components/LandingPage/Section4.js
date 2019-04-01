import React, { Component } from "react";
import { Row, Col, Icon, Menu } from "antd";

import sec4back from "../../resources/img/sec4back.jpg";

import "./LandingPage.css";

function handleClick(e) {
  console.log("click", e);
}
const SubMenu = Menu.SubMenu;

export default class Section4 extends Component {
  render() {
    return [
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{
          backgroundColor: "white",
        }}
      >
        <Col span={8}>
          <p
            style={{
              fontSize: "20pt",
              marginTop: "20px",
              color: "#1A263A",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            What is MLModelScope?
          </p>
        </Col>
      </Row>,
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{
          backgroundColor: "white",
        }}
      >
        <Col span={16}>
          <p
            style={{
              fontSize: "16pt",
              marginTop: "20px",
              color: "#1A263A",
            }}
          >
            MLModelScope is a open source reproducible model evaluation and profiling
            platform that shields heterogeneity (frameworks, datasets, models, hardware
            configurations) away. This one-stop open platform is designed to enable
            machine learning application, model, and system developers to quickly find,
            test, deploy, and benchmark combinations of models, frameworks and hardware
            configurations.
          </p>
        </Col>
      </Row>,
      <Row type="flex" justify="space-around" align="stetch">
        <Col
          style={{
            backgroundColor: "white",
            textAlign: "left",
          }}
          span={8}
        >
          <div style={{ paddingRight: "0px", marginRight: "30px" }}>
            <Menu onClick={handleClick} style={{ width: "100%" }} mode="vertical">
              <SubMenu
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  position: "absolute",
                  height: "145px",
                }}
                itemIcon={<div />}
                expandIcon={<div />}
                title={
                  <span style={{ textDecoration: "none", fontSize: "15pt" }}>
                    <Icon type="right" />A comprehensive evaluation system
                  </span>
                }
              />
              <p
                style={{
                  position: "absolute",
                  marginLeft: "50px",
                  marginTop: "60px",
                  paddingRight: "0px",
                  marginRight: "30px",
                }}
              >
                Bring together dispersed tools into one platform to explore the
                performance of different combinations
              </p>
              <SubMenu
                style={{
                  marginLeft: "10px",
                  marginRight: "20px",
                  marginTop: "158px",
                  position: "absolute",
                  height: "145px",
                }}
                itemIcon={<div />}
                expandIcon={<div />}
                title={
                  <span style={{ textDecoration: "none", fontSize: "15pt" }}>
                    <Icon type="right" />
                    Simplify ..
                  </span>
                }
              />
              <p
                style={{
                  position: "absolute",
                  marginLeft: "50px",
                  marginTop: "210px",
                  paddingRight: "0px",
                  marginRight: "30px",
                }}
              >
                Take away the pain of comparing tools by eliminating the cumbersome
                installation process and the stress of sorting dependencies
              </p>
              <SubMenu
                style={{
                  marginLeft: "10px",
                  marginTop: "290px",
                  position: "absolute",
                  height: "145px",
                }}
                itemIcon={<div />}
                expandIcon={<div />}
                title={
                  <span style={{ textDecoration: "none", fontSize: "15pt" }}>
                    <Icon type="right" />
                    Pick best system combination
                  </span>
                }
              />
              <p
                style={{
                  position: "absolute",
                  marginLeft: "50px",
                  marginTop: "340px",
                  paddingRight: "0px",
                  marginRight: "30px",
                }}
              >
                Discover the most efficient frameworks, models and hardware for your
                specific experiment Use side by side comparisons, graphs, and tables to
                draw insights and make an informed decision on which tools to use
              </p>
            </Menu>
          </div>
          <Row style={{ marginTop: "486px" }}>
            <Col
              style={{ minHeight: "60px", backgroundColor: "white", textAlign: "left" }}
            >
              <a href="/experiment" style={{ textDecoration: "none" }}>
                <p
                  style={{
                    color: "black",
                    fontSize: "16pt",
                    marginLeft: "50px",
                    marginTop: "25px",
                    textTransform: "uppercase",
                  }}
                >
                  Learn More
                  <Icon
                    style={{ marginLeft: "20px" }}
                    type="arrow-right"
                    theme="outlined"
                  />
                </p>{" "}
              </a>
            </Col>
          </Row>
        </Col>
        <Col
          style={{
            backgroundColor: "#1a263a",
            textAlign: "right",
            alignContent: "right",
          }}
          span={16}
        >
          <img
            alt="back"
            style={{
              height: "93%",
              width: "70%",
              marginLeft: "70px",
              marginTop: "60px",
            }}
            src={sec4back}
          />
        </Col>
      </Row>,
    ];
  }
}
