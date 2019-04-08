import React, { Component } from "react";
import { Layout } from "antd";
import yeast from "yeast";

// import Hero from "@components/LandingPage/Hero";
import Hero from "@components/LandingPage/Hero2";
import WhatIsMLModelScope from "@components/LandingPage/WhatIsMLModelScope";
import Section1 from "@components/LandingPage/Section1";
// import Section2 from "@components/LandingPage/Section2";
// import Section3 from "@components/LandingPage/Section3";
// import Section4 from "@components/LandingPage/Section4";
// import Section5 from "@components/LandingPage/Section5";
// import Section6 from "@components/LandingPage/Section6";
// import Section7 from "@components/LandingPage/Section7";
// import Section8 from "@components/LandingPage/Section8";
// import Section9 from "@components/LandingPage/Section9";
// import Section10 from "@components/LandingPage/Section10";

const { Content } = Layout;

export default class LandingPage extends Component {
  render() {
    return (
      <Content>
        <div style={{ marginTop: "50px" }} />
        <Hero breakpoint={850} />
        {/* <Hero breakpoint={850} /> */}
        <WhatIsMLModelScope breakpoint={850} />
        {/* <Section1 /> */}
        {/* <Section2 /> */}
        {/* <Section3 /> */}
        {/* <Section4 /> */}
        {/* <Section5 /> */}
        {/* <Section6 /> */}
        {/* <Section7 /> */}
        {/* <Section8 /> */}
        {/* <Section9 /> */}
        {/* <Section10 />  */}
      </Content>
    );
  }
}
