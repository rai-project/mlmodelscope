import React, { Component } from "react";
import Section1 from "../components/LandingPage/LandingPage";
import { Layout } from "antd";
const { Content } = Layout;

export default class LandingPage extends Component {
  render() {
    return (
      <Content>
        <Section1 />
      </Content>
    );
  }
}
