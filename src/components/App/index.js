import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import React from "react";
import {
  Header,
  Divider,
  Container,
  Menu,
  Button,
  Segment,
  Grid,
  Sidebar,
  Icon
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
    state = { activeItem: "home", visible: false };
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    toggleVisibility = () => this.setState({ visible: !this.state.visible });

    render() {
      // const { isLoggedIn } = this.props;
      const { activeItem, visible } = this.state;
      const showButton = false;

      return (
        <div className="App">
          {showButton
            ? <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
            : null}
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              width="thin"
              visible={visible}
              icon="labeled"
              vertical
              inverted
            >
              <Menu.Item name="home">
                <Icon name="home" />
                Home
              </Menu.Item>
              <Menu.Item name="frameworks">
                <Icon name="bars" />
                Frameworks
              </Menu.Item>
              <Menu.Item name="jobs">
                <Icon name="lab" />
                Jobs
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <main>
                <div className="App-content">
                  <Segment.Group
                    vertical
                    center
                    className="App-menu"
                    style={{ borderRadius: 0, margin: 0 }}
                  >
                    <Container text fluid inverted>
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
                  </Segment.Group>
                  <Segment.Group
                    vertical
                    center
                    className="App-header"
                    style={{ borderRadius: 0, margin: 0 }}
                  >
                    <Container inverted textAlign={"center"}>
                      <Header inverted size="huge">
                        CarML
                      </Header>
                      <Header inverted size="small">
                        Cognitive ARtifacts for Machine Learning
                      </Header>
                    </Container>
                  </Segment.Group>
                  <Segment.Group
                    vertical
                    padded
                    className="App-body"
                    style={{ borderRadius: 0, border: 0 }}
                  >
                    <Container text>
                      <Grid.Row centered columns={1}>
                        <Upload />
                      </Grid.Row>
                      <Divider horizontal />
                      <Grid.Row centered columns={1}>
                        <Model />
                      </Grid.Row>
                    </Container>
                  </Segment.Group>
                </div>
                <div className="App-footer">
                  <Footer />
                </div>
              </main>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      );
    }
  }
);
