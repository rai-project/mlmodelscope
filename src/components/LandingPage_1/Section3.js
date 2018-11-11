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

export default class Section3 extends Component {
  render() {
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
        {/* <Col
            style={{
              backgroundColor: "#322CC9",
              textAlign: "left",
              minHeight: "700px",
              padding: "10px",
            }}
            span={8}
          >
            <a
              style={{
                textDecoration: "none",
                backgroundColor: "rgba(255, 253, 253, 0.24)",
                color: "white",
                marginLeft: "50px",
                marginTop: "60px",
                textTransform: "uppercase",
              }}
              className="buttonSmall"
              href="/"
            >
              MODELS
            </a>
            <p
              style={{
                fontSize: "16pt",
                marginLeft: "50px",
                marginTop: "15px",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {" "}
              HOW TO CHOOSE RIGHT <br /> MODELS?{" "}
            </p>
            <p style={{ fontSize: "12pt", marginLeft: "50px", marginTop: "20px", color: "white" }}>
              {" "}
              Find the latest models as published in the literature for your task (be it
              classification, object detection, tracking, machine translation and more) and directly
              run those models using either standard dataset or your own dataset - without worrying
              about the hassle of installing any software. See how those models perform and compare
              with each other and draw your own conclusion.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              <p
                style={{ fontSize: "16pt", marginLeft: "50px", marginTop: "300px", color: "white" }}
              >
                Test Your Models
                <img style={{ marginLeft: "225px" }} src={arrow} alt="" />{" "}
              </p>{" "}
            </a>
          </Col>
          <Col
            style={{
              backgroundColor: "#0170C6",
              textAlign: "left",
              minHeight: "700px",
              padding: "10px",
            }}
            span={8}
          >
            <a
              style={{
                textDecoration: "none",
                backgroundColor: "rgba(17, 0, 255, 0.37)",
                color: "white",
                marginLeft: "50px",
                marginTop: "60px",
                textTransform: "uppercase",
              }}
              className="buttonSmall"
              href="/"
            >
              MACHINES
            </a>
            <p
              style={{
                fontSize: "16pt",
                marginLeft: "50px",
                marginTop: "15px",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {" "}
              HOW TO CHOOSE RIGHT <br /> MACHINES?{" "}
            </p>
            <p style={{ fontSize: "12pt", marginLeft: "50px", marginTop: "20px", color: "white" }}>
              Gain the insight of system performance bottlenecks across the hierarchical stacks,
              from application pipeline to model pipeline, to framework runtime pipeline, to kernel
              launching pipeline, to library and hardware instruction sets, with a rich set of
              traces collected from running the most relevant machine learning models and datasets.
              The supported hardware systems include X86, POWER, and ARM with accelerators including
              GPUS and FPGAs.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              <p
                style={{ fontSize: "16pt", marginLeft: "50px", marginTop: "310px", color: "white" }}
              >
                Test Your Machines
                <img alt="back" style={{ marginLeft: "225px" }} src={arrow} />{" "}
              </p>{" "}
            </a>
          </Col>
        </Row> */}
      </div>
    );
  }
}
