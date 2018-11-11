import React, { Component } from "react";
import Introduction from "../components/LandingPage_1/Introduction";
import Section2 from "../components/LandingPage_1/Section2";
import Section3 from "../components/LandingPage_1/Section3";
import Section4 from "../components/LandingPage_1/Section4"; // eslint-disable-line
import Section5 from "../components/LandingPage_1/Section5";
import Section6 from "../components/LandingPage_1/Section6";
import Section7 from "../components/LandingPage_1/Section7";
import Section8 from "../components/LandingPage_1/Section8";
import Section9 from "../components/LandingPage_1/Section9";
import Section10 from "../components/LandingPage_1/Section10";
import { Layout } from "antd";
const { Content } = Layout;

export default class LandingPage extends Component {
  render() {
    return (
      <Content>
        <Introduction />
        <Section2 />
        <Section3 />
        {/* <Section4 /> */}
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </Content>
    );
  }
}
