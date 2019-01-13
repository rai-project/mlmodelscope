import React, { Component } from "react";
import { Layout } from "antd";
import Helmet from "react-helmet";
import { Route } from "react-router-dom";
import ConferenceLandingPage from "../components/Conference/ConferenceLandingPage";
import ConferenceUploadPage from "../components/Conference/ConferenceUploadPage";
import ConferenceTestPage from "../components/Conference/ConferenceTestPage";


export default class ConferencePage extends Component {
  render() {
    return (
      <Layout.Content>
        <Helmet title="Conference" meta={[{ property: "og:title", content: "Conference" }]} />
        <Route exact path={this.props.match.path} component={ConferenceLandingPage}/>
        <Route path={`${this.props.match.path}/upload`} component={ConferenceUploadPage} />
        <Route path={`${this.props.match.path}/test`} component={ConferenceTestPage} />
      </Layout.Content>
    );
  }
}