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
    return (
      <Row justify="space-around" align="center">
        <Col
          style={{
            minHeight: "575px",
            backgroundColor: "white",
            textAlign: "left",
          }}
          span={8}
        >
          <a
            style={{ textDecoration: "none", marginLeft: "50px", marginTop: "50px" }}
            className="buttonSmall"
            href="/"
          >
            EXPERIMENT
          </a>
          <div style={{ paddingRight: "0px", marginRight: "30px" }}>
            <Menu onClick={handleClick} style={{ width: "100%" }} mode="vertical">
              <SubMenu
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  position: "absolute",
                  height: "145px",
                }}
                title={
                  <span style={{ textDecoration: "none", fontSize: "15pt" }}>
                    <Icon type="right" />
                    Choose or bring-your-own dataset
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
                A wide array of datasets, including public available ones, users contributed ones,
                or proprietary ones (only you see your own dataset).
              </p>
              <SubMenu
                style={{
                  marginLeft: "10px",
                  marginRight: "20px",
                  marginTop: "158px",
                  position: "absolute",
                  height: "145px",
                }}
                title={
                  <span style={{ textDecoration: "none", fontSize: "15pt" }}>
                    <Icon type="right" />
                    Select or deploy-your-own models
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
                A rich set of machine learning and deep learning models, built from literature or
                contributed by developers directly.
              </p>
              <SubMenu
                style={{
                  marginLeft: "10px",
                  marginTop: "290px",
                  position: "absolute",
                  height: "145px",
                }}
                title={
                  <span style={{ textDecoration: "none", fontSize: "15pt" }}>
                    <Icon type="right" />
                    Pick or integrate-your-own hardware
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
                A variety of hardware configurations from well-known X86, POWER and ARM systems to
                specialized accelerators such as GPUs and FPGAs to third-party proprietary
                accelerators.
              </p>
            </Menu>
          </div>
          <Row style={{ marginTop: "486px" }} className="FunctionalOverview-section4">
            <Col style={{ minHeight: "60px", backgroundColor: "white", textAlign: "left" }}>
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
                  Explore Features
                  <Icon style={{ marginLeft: "20px" }} type="arrow-right" theme="outlined" />
                </p>{" "}
              </a>
            </Col>
          </Row>
        </Col>
        <Col style={{ minHeight: "50vh", backgroundColor: "#1a263a", textAlign: "left" }} span={16}>
          <img
            alt="back"
            style={{ height: "100%", width: "60%", marginLeft: "70px", marginTop: "60px" }}
            src={sec4back}
          />
        </Col>
      </Row>
    );
  }
}
