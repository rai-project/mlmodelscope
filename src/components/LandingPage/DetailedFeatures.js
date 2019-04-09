import React, { Component } from "react";
import { Col, Row, Card } from "antd";
import { withScroll } from "react-fns";
import withSizes from "react-sizes";

import { ReactComponent as TubeIcon, TextColor } from "@icons/tube.svg";

import { PanelsHeading } from "./Panel";

const FeatureRow = function({ isMobile, children }) {
  return (
    <Row
      type="flex"
      justify="space-around"
      align="middle"
      gutter={16}
      style={{
        fontSize: "1.5rem",
        color: "white",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: isMobile ? "50px" : "150px",
        paddingRight: isMobile ? "50px" : "150px",
      }}
    >
      {children}
    </Row>
  );
};

const FeatureCard = function() {
  return (
    <Col lg={8} md={16} sm={24} style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <Card
        hoverable
        bordered={false}
        title={
          <div style={{ fontSize: "2rem", color: TextColor }}>System Architects</div>
        }
      >
        <Card.Meta
          description={
            <div
              style={{
                color: "#1A263A",
                fontWeight: 400,
                fontSize: "1.5rem",
                color: TextColor,
              }}
            >
              Analyse ML workloads across systems, accelerators, and software stacks
            </div>
          }
        />
      </Card>
    </Col>
  );
};

@withScroll
@withSizes(({ width }, { breakpoint }) => ({ isMobile: width < breakpoint }))
class DetailedFeatures extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <React.Fragment>
        <PanelsHeading>Features</PanelsHeading>
        <FeatureRow isMobile={isMobile}>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </FeatureRow>
        <FeatureRow isMobile={isMobile}>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </FeatureRow>
      </React.Fragment>
    );
  }
}

export default DetailedFeatures;
