import React from "react";
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";

import { Container, Menu } from "semantic-ui-react";

const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    currentPage: state`app.currentPage`,
    navbarClicked: signal`app.navbarClicked`
  },
  function NavBar({ navbarClicked, currentPage }) {
    return (
      <div className="App-menu">
        <Container>
          <Menu
            inverted
            pointing
            secondary
            style={{
              borderColor: "#0DB7C4"
            }}
          >
            <Menu.Item
              name="home"
              active={currentPage === "Home"}
              onClick={e => navbarClicked({ name: "Home" })}
              style={{
                fontFamily
              }}
            />
            <Menu.Item
              name="frameworks"
              active={currentPage === "Frameworks"}
              onClick={e => navbarClicked({ name: "Frameworks" })}
              style={{
                fontFamily
              }}
            />
            <Menu.Item
              name="models"
              active={currentPage === "Models"}
              onClick={e => navbarClicked({ name: "Models" })}
              style={{
                fontFamily
              }}
            />
            <Menu.Item
              name="About"
              active={currentPage === "About"}
              onClick={e => navbarClicked({ name: "About" })}
              style={{
                fontFamily
              }}
            />
            {/*<Menu.Menu position="right">
              <Menu.Item>
                <Button
                  style={{
                    fontFamily,
                  }}
                >
                  Log In
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button
                  primary
                  style={{
                    fontFamily,
                  }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu.Menu>*/}
          </Menu>
        </Container>
      </div>
    );
  }
);
