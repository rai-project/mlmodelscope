import React, { Component } from "react";
import Markdown from "react-markdown";
import { Layout } from "antd";
import Helmet from "react-helmet";

// eslint-disable-next-line
import AboutContent from "!raw-loader!./../docs/about.md";

export default class AboutPage extends Component {
  render() {
    return (
      <Layout.Content style={{ marginTop: "60px", marginLeft: "40px", padding: "30px" }}>
        <Helmet title="About" meta={[{ property: "og:title", content: "About" }]} />
        <Markdown source={AboutContent} />
      </Layout.Content>
    );
  }
}
