import "./LandingPage.css";
import { Row as AntdRow, Col as AntdCol, Icon } from "antd";
import React, { Component } from "react";

const Color1 = "#D2F0F7";
const Color2 = "#2E3F8F";
const Color3 = "#1A263A";

const Black = "#464445";

const Row = ({ children }) => (
  <AntdRow type="flex" justify="space-around" align="center">
    {children}
  </AntdRow>
);

const Col = ({ children, backgroundColor }) => (
  <AntdCol
    style={{
      backgroundColor: backgroundColor || "white",
      textAlign: "left",
      padding: "10px",
    }}
    span={8}
  >
    {children}
  </AntdCol>
);

const MobileCol = ({ children, backgroundColor }) => (
  <AntdCol
    style={{
      backgroundColor: backgroundColor || "white",
      textAlign: "left",
      padding: "10px",
    }}
    span={24}
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
    }}
    className="buttonSmall"
    href={href}
  >
    {children}{" "}
  </a>
);

const Title = ({ children, color }) => (
  <p
    style={{
      fontSize: "16pt",
      marginLeft: "50px",
      color: color || Black,
      marginTop: "15px",
    }}
  >
    {children}
  </p>
);

const MobileTitle = ({ children, color }) => (
  <p
    style={{
      fontSize: "16pt",
      marginLeft: "20px",
      color: color || Black,
      marginTop: "15px",
    }}
  >
    {children}
  </p>
);

const Body = ({ children, color }) => (
  <p
    style={{
      fontSize: "12pt",
      color: color || Black,
      marginLeft: "50px",
      marginTop: "20px",
    }}
  >
    {children}
  </p>
);

const MobileBody = ({ children, color }) => (
  <p
    style={{
      fontSize: "12pt",
      color: color || Black,
      marginLeft: "20px",
      marginTop: "20px",
    }}
  >
    {children}
  </p>
);

const Info = ({ href, color, children }) => (
  <a
    href={href}
    style={{
      textDecoration: "none",
      color: color || Black,
    }}
  >
    <p
      style={{
        fontSize: "16pt",
        marginLeft: "50px",
        marginTop: "140px",
        textTransform: "uppercase",
      }}
    >
      {children}
      <Icon style={{ marginLeft: "20px" }} type="arrow-right" theme="outlined" />
    </p>
  </a>
);

const MobileInfo = ({ href, color, children }) => (
  <a
    href={href}
    style={{
      textDecoration: "none",
      color: color || Black,
    }}
  >
    <p
      style={{
        fontSize: "16pt",
        marginLeft: "20px",
        marginTop: "20px",
        textTransform: "uppercase",
      }}
    >
      {children}
      <Icon style={{ marginLeft: "20px" }} type="arrow-right" theme="outlined" />
    </p>
  </a>
);


export default class Section3 extends Component {
  renderMobilePage() {
    return (
      <div className="LandingPage-section3">
        <Row>
          <MobileCol backgroundColor={Color1} >
            <SmallButton href="/" color={Black}>
              MODELS
            </SmallButton>
            <MobileTitle color={Black}>
              HOW TO CHOOSE RIGHT <br /> MODELS?{" "}
            </MobileTitle>
          </MobileCol>
        </Row>
        <Row>
          <MobileCol backgroundColor={Color1}>
            <MobileBody color={Black}>
              Find the latest models as published in the literature for your task (be it
              classification, object detection, tracking, machine translation and more) and directly
              run those models using either standard dataset or your own dataset - without worrying
              about the hassle of installing any software. See how those models perform and compare
              with each other and draw your own conclusion.
            </MobileBody>
          </MobileCol>
        </Row>
        <Row>
          <MobileCol backgroundColor={Color1}>
            <MobileInfo>Test Your Models</MobileInfo>
          </MobileCol>
        </Row>
        <Row>
          <MobileCol backgroundColor={Color2} >
            <SmallButton href="/">FRAMEWORK</SmallButton>
            <MobileTitle color="white">
              HOW TO CHOOSE RIGHT <br /> FRAMEWORK ?{" "}
            </MobileTitle>
          </MobileCol>
        </Row>
        <Row>
          <MobileCol backgroundColor={Color2}>
            <MobileBody color="white">
              Run and compare performance and accuracy results of the same models on a wide range of
              deep learning frameworks, such as Tensorflow, MXNet, PyTorch, Caffe, Caffe2, CNTK,
              TensorRT and more. Side-by-side comparison results clearly reveal the pros and cons of
              various framework.
            </MobileBody>
          </MobileCol>
        </Row>
        <Row>
          <MobileCol backgroundColor={Color2}>
            <MobileInfo color="white">Test Your Frameworks</MobileInfo>
          </MobileCol>
        </Row>
        <Row>
          <MobileCol backgroundColor={Color3} >
            <SmallButton href="/">MACHINE</SmallButton>
            <MobileTitle color="white">
              HOW TO CHOOSE RIGHT <br /> FRAMEWORK ?{" "}
            </MobileTitle>
          </MobileCol>
        </Row>
        <Row>
          <MobileCol backgroundColor={Color3}>
            <MobileBody color="white">
              Gain the insight of system performance bottlenecks across the hierarchical stacks,
              from application pipeline to model pipeline, to framework runtime pipeline, to kernel
              launching pipeline, to library and hardware instruction sets, with a rich set of
              traces collected from running the most relevant machine learning models and datasets.
              The supported hardware systems include X86, POWER, and ARM with accelerators including
              GPUS and FPGAs.
            </MobileBody>
          </MobileCol>
        </Row>
        <Row>
          <MobileCol backgroundColor={Color3}>
            <MobileInfo color="white">Test Your Frameworks</MobileInfo>
          </MobileCol>
        </Row>
      </div>
    )
  }

  renderWebPage() {
    return (
      <div className="LandingPage-section3">
        <Row>
          <Col backgroundColor={Color1}>
            <SmallButton href="/" color={Black}>
              MODELS
            </SmallButton>
            <Title color={Black}>
              HOW TO CHOOSE RIGHT <br /> MODELS?{" "}
            </Title>
          </Col>

          <Col backgroundColor={Color2}>
            <SmallButton href="/">FRAMEWORK</SmallButton>
            <Title color="white">
              HOW TO CHOOSE RIGHT <br /> FRAMEWORK ?{" "}
            </Title>
          </Col>
          <Col backgroundColor={Color3}>
            <SmallButton href="/">MACHINE</SmallButton>
            <Title color="white">
              HOW TO CHOOSE RIGHT <br /> MACHINES?{" "}
            </Title>
          </Col>
        </Row>
        <Row>
          <Col backgroundColor={Color1}>
            <Body color={Black}>
              Find the latest models as published in the literature for your task (be it
              classification, object detection, tracking, machine translation and more) and directly
              run those models using either standard dataset or your own dataset - without worrying
              about the hassle of installing any software. See how those models perform and compare
              with each other and draw your own conclusion.
            </Body>
          </Col>
          <Col backgroundColor={Color2}>
            <Body color="white">
              Run and compare performance and accuracy results of the same models on a wide range of
              deep learning frameworks, such as Tensorflow, MXNet, PyTorch, Caffe, Caffe2, CNTK,
              TensorRT and more. Side-by-side comparison results clearly reveal the pros and cons of
              various framework.
            </Body>
          </Col>
          <Col backgroundColor={Color3}>
            <Body color="white">
              Gain the insight of system performance bottlenecks across the hierarchical stacks,
              from application pipeline to model pipeline, to framework runtime pipeline, to kernel
              launching pipeline, to library and hardware instruction sets, with a rich set of
              traces collected from running the most relevant machine learning models and datasets.
              The supported hardware systems include X86, POWER, and ARM with accelerators including
              GPUS and FPGAs.
            </Body>
          </Col>
        </Row>
        <Row>
          <Col backgroundColor={Color1}>
            <Info>Test Your Models</Info>
          </Col>
          <Col backgroundColor={Color2}>
            <Info color="white">Test Your Frameworks</Info>
          </Col>
          <Col backgroundColor={Color3}>
            <Info color="white">Test Your Machines</Info>
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    if (window.screen.width < 576) {
      return (
        this.renderMobilePage()
      );
    } else {
      return (
        this.renderWebPage()
      )
    }
  }
}
