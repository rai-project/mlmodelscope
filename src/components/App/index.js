import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import React from "react";
import {
  Header,
  Container,
  Menu,
  Button,
  Segment,
  Grid
} from "semantic-ui-react";

import "./App.css";

import Model from "../Model";
import Upload from "../UploadArea";
import Footer from "../Footer";

export default connect(
  {
    // eslint-disable-next-line
    isLoggedIn: state`app.userIsLoggedIn`,
    // eslint-disable-next-line
    activePage: state`app.activePage`
  },
  class App extends React.Component {
    state = { activeItem: "home" };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
      // const { isLoggedIn } = this.props;
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
          <Segment.Group vertical raised>
            <Container>
              <Grid.Row centered columns={1}>
                <div className="App-upload">
                  <Upload />
                </div>
              </Grid.Row>
              <Grid.Row centered columns={1}>
                <div className="App-model">
                  <Model />
                </div>
              </Grid.Row>
            </Container>
          </Segment.Group>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      );
    }
  }
);
