import "./InitialSetupPage.css";
import React, { Component } from "react";
import Helmet from "react-helmet";
import { Row, Col, Layout, Steps } from "antd";
import CardWithIcon from "../components/Card/CardWithIcon";
import DisabledButton from "../components/Buttons/DisabledButton";
import Section2Fig1 from "../resources/landingpage/assets/section2-figure-1.svg";
import Section2Fig2 from "../resources/landingpage/assets/section2-figure-2.svg";
import Section2Fig3 from "../resources/landingpage/assets/section2-figure-3.svg";
import Section2Fig4 from "../resources/landingpage/assets/section2-figure-4.svg";
const { Content } = Layout;
const Step = Steps.Step;

export default class InitialSetupPage extends Component {
  render() {
    return (
      <Content>
        <Helmet title="Setup" meta={[{ property: "og:title", content: "Setup" }]} />
        <div style={{ marginTop: "40px", marginLeft: "30%", marginRight: "30%" }}>
          <Steps size="small" current={0}>
            <Step key="1" />
            <Step key="2" />
            <Step key="3" />
            <Step key="4" />
          </Steps>

          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <h1>Getting Started</h1>
            <p>First thing first, what are you trying to accomplish?</p>
          </div>
        </div>

        <div style={{ marginTop: "40px", marginLeft: "15%", marginRight: "15%" }}>
          <Row gutter={4}>
            <Col span={6}>
              <CardWithIcon
                className="Card"
                img={Section2Fig1}
                title={"DATA SET"}
                content={"Identify a public data set for my work"}
              />
            </Col>
            <Col span={6}>
              <CardWithIcon
                className="Card"
                img={Section2Fig2}
                title={"MODELS"}
                content={"Find a well trained model"}
              />
            </Col>
            <Col span={6}>
              <CardWithIcon
                className="Card"
                img={Section2Fig3}
                title={"FRAMEWORKS"}
                content={"Uncover the best frameworks"}
              />
            </Col>
            <Col span={6}>
              <CardWithIcon
                className="Card"
                img={Section2Fig4}
                title={"MACHINES"}
                content={"Uncover the machine with the performance you want"}
              />
            </Col>
          </Row>

          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <DisabledButton width="100%" height="60px" text="NEXT STEP: TASK" />
          </div>
        </div>
      </Content>
    );
  }
}
