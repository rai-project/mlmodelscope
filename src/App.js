import "./App.css";
import "./share/style.css";
import Helmet from "react-helmet";
import React, { Component } from "react";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";
import Router from "./router/router";
import { Layout, BackTop } from "antd";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>MLModelScope</title>
          <link rel="canonical" href="https://mlmodelscope.org" />
        </Helmet>
        <BackTop />
        <ReactRouter>
          <Layout
            style={{
              display: "flex",
              minHeight: "100vh",
              flexDirection: "column",
              backgroundColor: "#E8E9EB",
            }}
          >
            <GlobalHeader />

            <Layout.Content style={{ flex: 1 }}>
              <Error>
                <Router />
              </Error>
            </Layout.Content>

            <GlobalFooter />
          </Layout>
        </ReactRouter>
      </UserProvider>
    );
  }
}

export default App;
