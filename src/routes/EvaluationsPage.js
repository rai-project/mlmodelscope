import React, { Component } from "react";
import Markdown from "react-markdown";
import { Row, Col, Layout } from "antd";
import Helmet from "react-helmet";

export default class EvaluationsPage extends Component {
  render() {
    return (
      <Layout.Content style={{ marginLeft: "40px", padding: "30px" }}>
        <Helmet title="About" meta={[{ property: "og:title", content: "About" }]} />
        <Row type="flex" justify="center">
          <Col xlg={8} lg={16} sm={20}>
            <h1>Coming soon</h1>
          </Col>
        </Row>
      </Layout.Content>
    );
  }
}
