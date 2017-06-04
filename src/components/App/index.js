import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import React from "react";
import {
  Sidebar,
  Header,
  Segment,
  Container,
  Menu,
  Button
} from "semantic-ui-react";

import "./App.css";

import Model from "../Model";
import Upload from "../UploadArea";
import Footer from "../Footer";

export default connect(
  {
    isLoggedIn: state`user.isLoggedIn`
  },
  class App extends React.Component {
    state = { activeItem: "home" };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
      let { isLoggedIn } = this.props;
      const { activeItem } = this.state;

      return (
        <div className="App">
          <div className="App-menu">
            <Container>
              <Menu inverted pointing secondary>
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="about"
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                  <Menu.Item>
                    <Button>Log In</Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button primary>Sign Up</Button>
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Container>
          </div>
          <div className="App-header">
            <Header inverted size="huge">Carml</Header>
            <Header inverted size="small">
              Cognitive Artifact for Machine Learning
            </Header>
          </div>
          <div className="App-model">
            <Model />
          </div>
          <div className="App-upload">
            <Upload />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      );
    }
  }
);
