import React, { Component } from "react";

import Banner from "../components/LandingPage/Banner";
import Section4 from "../components/LandingPage/Section4"; // eslint-disable-line
import Section6 from "../components/LandingPage/Section6";
import Section7 from "../components/LandingPage/Section7";
import Section8 from "../components/LandingPage/Section8";
import Section9 from "../components/LandingPage/Section9";
import Section10 from "../components/LandingPage/Section10";
import { Layout } from "antd";

const { Content } = Layout;

export default class LandingPage extends Component {
  render() {
    return (
      <Content>
        <Banner breakpoint={850} />
        {/* <Section2 id="Content0_0" key="Content0_0" /> */}
        {/* <Section3 breakpoint={850} /> */}
        <Section4 />
        {/* <Section5 /> */}
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </Content>
    );
  }
}
