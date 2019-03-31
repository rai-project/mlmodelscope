import "./LandingPage.css";
import { Row as AntdRow, Col as AntdCol, Icon } from "antd";
import React, { Component } from "react";
import withSizes from "react-sizes";

const mapSizesToProps = ({ width }, { breakpoint }) => ({
  isMobile: width < breakpoint,
});

const Color1 = "#D2F0F7";
const Color2 = "#2E3F8F";
const Color3 = "#1A263A";
const Black = "#464445";

const Row = ({ style, children }) => (
  <AntdRow type="flex" justify="space-between" style={style}>
    {children}
  </AntdRow>
);

const Col = ({ isMobile, children, backgroundColor }) => (
  <AntdCol
    flex={1}
    style={{
      backgroundColor: backgroundColor || "white",
      textAlign: "left",
      padding: "10px",
      alignItems: "stetch",
      position: "relative",
    }}
    span={isMobile ? 24 : 8}
  >
    {children}
  </AntdCol>
);

const SmallButton = ({ href, color, backgroundColor, children }) => (
  <a
    style={{
      color: color || "white",
      backgroundColor: backgroundColor,
      textDecoration: "none",
      marginLeft: "50px",
      marginTop: "120px",
      textTransform: "uppercase",
      alignSelf: "flex-start",
    }}
    className="buttonSmall"
    href={href}
  >
    {children}{" "}
  </a>
);

const Title = ({ isMobile, children, color }) => (
  <p
    style={{
      fontSize: "16pt",
      marginLeft: isMobile ? "20px" : "50px",
      color: color || Black,
      marginTop: "15px",
      alignSelf: "flex-start",
    }}
  >
    {children}
  </p>
);

const Body = ({ isMobile, children, color }) => (
  <p
    style={{
      fontSize: "12pt",
      color: color || Black,
      marginLeft: isMobile ? "20px" : "50px",
      marginTop: "20px",
      alignSelf: "flex-start",
      paddingBottom: "40px",
    }}
  >
    {children}
  </p>
);

const Info = function({ isMobile, href, color, children }) {
  return (
    <a
      href={href}
      style={{
        float: "bottom",
        color: color || Black,
        alignSelf: "flex-end",
        position: "absolute",
        bottom: 0,
      }}
    >
      <p
        style={{
          fontSize: "16pt",
          marginLeft: isMobile ? "20px" : "50px",
          marginTop: "20px",
          textTransform: "uppercase",
        }}
      >
        {children}
        <Icon style={{ marginLeft: "20px" }} type="arrow-right" theme="outlined" />
      </p>
    </a>
  );
};

class Section3 extends Component {
  renderWebPage({ isMobile }) {
    const minHeight = isMobile ? "250px" : "575px";
    return (
      <Row
        isMobile={isMobile}
        style={{
          backgroundColor: "white",
          padding: 0,
          minHeight: { minHeight },
          display: "flex",
        }}
      >
        <Col backgroundColor={Color1} isMobile={isMobile}>
          <SmallButton href="/" color={Black}>
            MODELS
          </SmallButton>
          <Title color={Black} isMobile={isMobile}>
            HOW TO CHOOSE RIGHT <br /> MODELS?{" "}
          </Title>
          <Body color={Black} isMobile={isMobile}>
            Find the latest models as published in the literature for your task (be it
            classification, object detection, tracking, machine translation and more) and
            directly run those models using either standard dataset or your own dataset -
            without worrying about the hassle of installing any software. See how those
            models perform and compare with each other and draw your own conclusion.
          </Body>
          <Info isMobile={isMobile}>Test Your Models</Info>
        </Col>

        <Col backgroundColor={Color2} isMobile={isMobile}>
          <SmallButton href="/">FRAMEWORK</SmallButton>
          <Title color="white" isMobile={isMobile}>
            HOW TO CHOOSE RIGHT <br /> FRAMEWORK ?{" "}
          </Title>
          <Body color="white" isMobile={isMobile}>
            Run and compare performance and accuracy results of the same models on a wide
            range of deep learning frameworks, such as Tensorflow, MXNet, PyTorch, Caffe,
            Caffe2, CNTK, TensorRT and more. Side-by-side comparison results clearly
            reveal the pros and cons of various framework.
          </Body>
          <Info color="white" isMobile={isMobile}>
            Test Your Frameworks
          </Info>
        </Col>
        <Col backgroundColor={Color3} isMobile={isMobile}>
          <SmallButton href="/">MACHINE</SmallButton>
          <Title color="white" isMobile={isMobile}>
            HOW TO CHOOSE RIGHT <br /> MACHINES?{" "}
          </Title>
          <Body color="white" isMobile={isMobile}>
            Gain the insight of system performance bottlenecks across the hierarchical
            stacks, from application pipeline to model pipeline, to framework runtime
            pipeline, to kernel launching pipeline, to library and hardware instruction
            sets, with a rich set of traces collected from running the most relevant
            machine learning models and datasets. The supported hardware systems include
            X86, POWER, and ARM with accelerators including GPUS and FPGAs.
          </Body>
          <Info color="white" isMobile={isMobile}>
            Test Your Machines
          </Info>
        </Col>
      </Row>
    );
  }

  render() {
    const { isMobile } = this.props;
    return this.renderWebPage({ isMobile });
  }
}

export default withSizes(mapSizesToProps)(Section3);
