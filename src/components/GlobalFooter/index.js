import React from "react";
import { Layout, Row, Col } from "antd";

import C3SRLogo from "@/resources/logo/logo-c3sr.png";
import { ReactComponent as IBMLogo } from "@/resources/logo/logo-ibm.svg";
import { ReactComponent as UIUCLogo } from "@/resources/logo/logo-uiuc.svg";

const { Footer } = Layout;

export default function GlobalFooter() {
  return (
    <Footer
      className="DarkBlue"
      style={{
        verticalAlign: "middle",
        height: "auto",
        padding: "0px",
      }}
    >
      <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Col sm={{ span: 4 }} xs={{ span: 8 }}>
          <a href="https://c3sr.com">
            <img src={C3SRLogo} style={{ height: "3rem", marginLeft: "10%" }} />
          </a>
        </Col>
        <Col sm={{ span: 2 }} xs={{ span: 4 }}>
          {/* <a href="https://github.com/rai-project" style={{ color: "white" }}>
              GitHub
            </a> */}
        </Col>
        <Col sm={{ span: 2 }} xs={{ span: 4 }} style={{ color: "white", height: "auto" }}>
          {/* Terms */}
        </Col>
        <Col sm={{ span: 2 }} xs={{ span: 4 }} style={{ color: "white" }}>
          {/* Privacy */}
        </Col>
        <Col sm={{ span: 2 }} xs={{ span: 4 }} style={{ color: "white" }}>
          {/* Copyright */}
        </Col>
        <Col sm={{ span: 8 }} xs={{ span: 24 }} style={{ height: "10px" }} />
        <Col sm={{ span: 2 }} xs={{ span: 4 }} style={{ color: "white" }}>
          <a href="https://ibm.com">
            <IBMLogo style={{ height: "2rem", marginLeft: "10%" }} />
          </a>
        </Col>
        <Col sm={{ span: 2 }} xs={{ span: 4 }} style={{ color: "white" }}>
          <a href="http://impact.crhc.illinois.edu">
            <UIUCLogo style={{ height: "2rem", marginLeft: "10%" }} />
          </a>
          />
        </Col>
      </Row>
    </Footer>
  );
}
