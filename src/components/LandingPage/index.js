import React, { Component } from "react";
import { Layout } from "antd";

import Hero from "./Hero";
import Features from "./Features";
import Users from "./Users";
import DetailedFeatures from "./DetailedFeatures";
import LearnMore from "./LearnMore";

const { Content } = Layout;

export default class LandingPage extends Component {
  render() {
    return (
      <Content style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Hero breakpoint={850} />
        <Features breakpoint={1010} />
        <Users breakpoint={1010} />
        <DetailedFeatures breakpoint={1010} />
        <LearnMore breakpoint={1010} />
      </Content>
    );
  }
}
