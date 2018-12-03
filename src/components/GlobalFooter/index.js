import React, { Component } from "react";
import "./GlobalFooter.css";
import { Layout, Row, Col } from "antd";
import C3SRLogo from "../../resources/logo/logo-c3sr.png";
import IBMLogo from "../../resources/logo/logo-ibm.svg";
import UIUCLogo from "../../resources/logo/logo-uiuc.svg";
const { Footer } = Layout;

export default class GlobalFooter extends Component {
  render() {
    return (
      <Footer
        className="DarkBlue"
        style={{
          verticalAlign: "middle",
          height: "100px",
          padding: "0px",
        }}
      >
      <Row>
        <Col sm={{span: 4}} xs={{span: 8}}>
          <a href="https://c3sr.com">
            <img src={C3SRLogo} className="C3SR-logo" alt="" />
          </a>
        </Col>
        <Col sm={{span: 2}} xs={{span: 4}}>
            <a href="https://github.com/rai-project" style={{ color: "white" }}>
              GitHub
            </a>
        </Col>
        <Col sm={{span: 2}} xs={{span: 4}} style={{ color: "white", height: "auto" }}>
          Terms
        </Col>
        <Col sm={{span: 2}} xs={{span: 4}} style={{ color: "white" }}>
          Privacy
        </Col>
        <Col sm={{span: 2}} xs={{span: 4}} style={{ color: "white" }}>
          Copyright
        </Col>
        <Col sm={{span: 8}} xs={{span: 24}} style={{height: "10px"}}/>
        <Col sm={{span: 2}} xs={{span: 4}} style={{ color: "white" }}>
            <a href="https://ibm.com">
              <img src={IBMLogo} className="IBM-logo" alt="" />
            </a>
        </Col>
        <Col sm={{span: 2}} xs={{span: 4}} style={{ color: "white" }}>
            <a href="http://impact.crhc.illinois.edu">
              <img src={UIUCLogo} className="UIUC-logo" alt="" />
            </a>
        </Col>
      </Row>
      </Footer>
    );
  }
}
