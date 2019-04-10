import React, { Component } from "react";
import Markdown from "react-markdown";
import { Row, Col, Layout } from "antd";
import Helmet from "react-helmet";

// eslint-disable-next-line
import AboutContent from "!raw-loader!./../docs/about.md";

export default class AboutPage extends Component {
  render() {
    return (
      <Layout.Content style={{ marginLeft: "40px", padding: "30px" }}>
        <Helmet title="About" meta={[{ property: "og:title", content: "Use cases" }]} />
        <Row type="flex" justify="center">
          <Col xlg={8} lg={16} sm={20}>
            <Markdown source={AboutContent} />
          </Col>
        </Row>
      </Layout.Content>
    );
  }
}
