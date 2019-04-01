import React, { Component } from "react";
import { Layout } from "antd";

import Banner from "../components/LandingPage/Banner";
import Section0 from "../components/LandingPage/Section0";
import Section1 from "../components/LandingPage/Section1";
import Section2 from "../components/LandingPage/Section2";
import Section3 from "../components/LandingPage/Section3";
import Section4 from "../components/LandingPage/Section4";
import Section5 from "../components/LandingPage/Section5";
import Section6 from "../components/LandingPage/Section6";
import Section7 from "../components/LandingPage/Section7";
import Section8 from "../components/LandingPage/Section8";
import Section9 from "../components/LandingPage/Section9";
import Section10 from "../components/LandingPage/Section10";

const { Content } = Layout;

export default class LandingPage extends Component {
  render() {
    return (
      <Content>
        <Banner breakpoint={850} />
        <Section0 />
        {/* <Section1 /> */}
        <Section2 />
        <Section3 />
        <Section4 />
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
