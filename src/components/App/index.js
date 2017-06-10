import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import React from "react";
import { Segment, Sidebar } from "semantic-ui-react";

import "./App.css";

import Navbar from "../Navbar";
import Header from "../Header";
import Home from "../Home";
import Footer from "../Footer";
import ModelInformations from "../ModelInformations";
// import Features from "../Features";
// import LocationFeature from "../LocationFeature";
// import ModelGraph from "../ModelGraph";

const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    // eslint-disable-next-line
    currentPage: state`app.currentPage`,
    appLoaded: signal`app.appLoaded`
  },
  class App extends React.Component {
    componentDidMount() {
      this.props.appLoaded();
    }
    render() {
      let page = <Home />;
      if (this.props.currentPage === "Models") {
        page = <ModelInformations />;
      }

      return (
        <div className="App">
          <Sidebar.Pusher style={{ border: 0, borderRadius: 0 }}>
            <main>
              <div className="App-content">
                <Navbar />
                <Header />
                <Segment.Group
                  className="App-body"
                  style={{ borderRadius: 0, border: 0, fontFamily }}
                >

                  {page}
                </Segment.Group>
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
