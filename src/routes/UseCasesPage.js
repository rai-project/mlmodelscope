import React, { Component } from "react";
import Markdown from "react-markdown";
import { Row, Col, Layout } from "antd";
import Helmet from "react-helmet";

// eslint-disable-next-line
import AboutContent from "!raw-loader!./../docs/about.md";

export default class UseCasesPage extends Component {
  render() {
    return (
      <Layout.Content style={{ marginLeft: "40px", padding: "30px" }}>
        <Helmet title="About" meta={[{ property: "og:title", content: "About" }]} />
        <Row type="flex" justify="center" style={{ paddingTop: "30px" }}>
          <Col xlg={8} lg={16} sm={20}>
            <Markdown source={AboutContent} />
          </Col>
        </Row>
      </Layout.Content>
    );
  }
}
