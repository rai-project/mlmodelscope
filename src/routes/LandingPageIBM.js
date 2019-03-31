import React, { Component } from "react";

import Introduction from "../components/LandingPageIBM/Introduction";
import Section2 from "../components/LandingPageIBM/Section2";
import Section3 from "../components/LandingPageIBM/Section3";
import Section4 from "../components/LandingPageIBM/Section4"; // eslint-disable-line
import Section5 from "../components/LandingPageIBM/Section5";
import Section6 from "../components/LandingPageIBM/Section6";
import Section7 from "../components/LandingPageIBM/Section7";
import Section8 from "../components/LandingPageIBM/Section8";
import Section9 from "../components/LandingPageIBM/Section9";
import Section10 from "../components/LandingPageIBM/Section10";
import { Layout } from "antd";

const { Content } = Layout;

export default class LandingPageIBMIBM extends Component {
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
