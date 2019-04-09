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
        alignItems: "stretch",
      }}
    >
      {children}
    </Row>
  );
};

const FeatureCard = function({ title, children }) {
  return (
    <Col lg={8} md={16} sm={24} style={{ padding: "10px", alignSelf: "stretch" }}>
      <Card
        hoverable
        style={
          {
            // borderTop: "0",
            // borderLeft: "0",
            // borderRight: "0",
            // borderBottom: "0",
          }
        }
        headStyle={{
          fontSize: "2rem",
          color: TextColor,
        }}
        bodyStyle={{
          fontSize: "1.2rem",
          color: TextColor,
        }}
        title={title}
      >
        <Card.Meta description={children} />
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
          <FeatureCard title={"Models"}>
            Run hundreds of builtin models that span modalities. All popular models for
            classification, segmentation, image enhancement, and object detection are
            supported.
          </FeatureCard>
          <FeatureCard title={"Frameworks"}>
            Publish your models or systems to the MLModelScope and exposed them through
            the online hub to gather feedback such as realistic accuracy results and
            failure points.
          </FeatureCard>
          <FeatureCard title={"Systems"}>
            Experiment on Linux, Android, iOS, and macOS running on X86, ARM, and PowerPC
            CPU architectures and leverage accelerators such as GPUs and FPGAs.
          </FeatureCard>
        </FeatureRow>
        <FeatureRow isMobile={isMobile}>
          <FeatureCard title={"Publish Workflows"}>
            Publish your models or systems to the MLModelScope and exposed them through
            the online hub to gather feedback such as realistic accuracy results and
            failure points.
          </FeatureCard>
          <FeatureCard title={"Workflow Analysis"}>
            Publish your models or systems to the MLModelScope and exposed them through
            the online hub to gather feedback such as realistic accuracy results and
            failure points.
          </FeatureCard>
          <FeatureCard title={"Workflow Analysis"}>
            Publish your models or systems to the MLModelScope and exposed them through
            the online hub to gather feedback such as realistic accuracy results and
            failure points.
          </FeatureCard>
        </FeatureRow>
      </React.Fragment>
    );
  }
}

export default DetailedFeatures;
