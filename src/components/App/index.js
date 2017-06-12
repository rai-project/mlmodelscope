import React from "react";
import { Helmet } from "react-helmet";

import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { Sidebar, Container } from "semantic-ui-react";

import Navbar from "../Navbar";
import Header from "../Header";
import Home from "../Home";
import Footer from "../Footer";
import ModelInformations from "../ModelInformations";
import ModelInformation from "../ModelInformation";
import InferenceResults from "../InferenceResults";
import Snackbar from "../Snackbar";

import "./App.css";

const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    // eslint-disable-next-line
    currentPage: state`app.currentPage`,
    appLoaded: signal`app.appLoaded`,
    appName: state`app.name`,
    websiteUrl: state`websiteUrl`
  },
  class App extends React.Component {
    componentDidMount() {
      // this.props.appLoaded();
    }
    render() {
      let page = <Home />;
      switch (this.props.currentPage) {
        case "Models":
          page = <ModelInformations />;
          break;
        case "ModelInformation":
          page = <ModelInformation />;
          break;
        case "InferenceResults":
          page = <InferenceResults />;
          break;
        default:
          page = <Home />;
          break;
      }

      return (
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.props.appName}</title>
            <link rel="canonical" href={this.props.websiteUrl} />
          </Helmet>
          <Sidebar.Pusher style={{ border: 0, borderRadius: 0 }}>
            <main>
              <Snackbar />
              <div className="App-content">
                <Navbar />
                <Header />
                <Container
                  className="App-body"
                  style={{ borderRadius: 0, border: 0, fontFamily }}
                >
                  {page}
                </Container>
              </div>
              <div
                className="App-footer"
                style={{
                  fontFamily
                }}
              >
                <Footer />
              </div>
            </main>
          </Sidebar.Pusher>
        </div>
      );
    }
  }
);
