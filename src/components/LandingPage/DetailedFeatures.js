import React, { Component } from "react";
import { Col, Row, Card } from "antd";
import { withScroll } from "react-fns";
import withSizes from "react-sizes";

import { ReactComponent as TubeIcon, TextColor } from "@icons/tube.svg";

import { PanelsHeading } from "../Panel";

const FeatureRow = function({ isMobile, children }) {
  return (
    <Row
      type="flex"
      justify="center"
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
    <Col
      xxl={8}
      xl={8}
      lg={16}
      md={16}
      sm={24}
      style={{ padding: "10px", alignSelf: "stretch" }}
    >
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
          <FeatureCard title={"Over 300 Models"}>
            Run hundreds of builtin models that span modalities. All popular models for
            classification, segmentation, image enhancement, and object detection are
            supported.
          </FeatureCard>
          <FeatureCard title={"Framework Integration"}>
            Compare performance and accuracy results for the same models across
            frameworks. Side-by-side comparison results clearly reveal the pros and cons
            of various framework.
          </FeatureCard>
          <FeatureCard title={"System Agnostic"}>
            Experiment on Linux, Android, iOS, and macOS running on X86, ARM, and PowerPC
            CPU architectures and leverage accelerators such as GPUs and FPGAs.
          </FeatureCard>
        </FeatureRow>
        <FeatureRow isMobile={isMobile}>
          <FeatureCard title={"Publish Workflows"}>
            Publish your models or systems to the MLModelScope and exposed them to gather
            feedback such as accuracy results and failure points.
          </FeatureCard>
          <FeatureCard title={"Workflow Analysis"}>
            Profile workflows across levels of HW/SW abstractions and capture system
            performance and resource usage with real world end-to-end AI workloads..
          </FeatureCard>
          <FeatureCard title={"Dataset Accuracy"}>
            Evaluate the workflow using popular datasets and metrics or bring your own
            dataset and perform model, framework, and system evaluation on that.
          </FeatureCard>
        </FeatureRow>
      </React.Fragment>
    );
  }
}

export default DetailedFeatures;
