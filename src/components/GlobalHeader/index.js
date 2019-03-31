import React, { Component } from "react";
import { Layout, Menu, Icon, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext"; // eslint-disable-line
import ViewContext from "../../context/ViewContext"; // eslint-disable-line

const { Header } = Layout;

const userLoginEnabled = false;

export default class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_menu_open: false,
    };
    this.renderUser = this.renderUser.bind(this);
    this.menu = this.menu.bind(this);
    this.toggleMobileMenuOpen = this.toggleMobileMenuOpen.bind(this);
  }

  renderUser({ username, item_style }) {
    if (userLoginEnabled === false) {
      return null;
    }
    if (username == null) {
      return [
        <Menu.Item key="signup" title="Sign up" style={item_style}>
          Sign Up
        </Menu.Item>,
        <Menu.Item key="login" title="Login" style={item_style}>
          <NavLink to="/login">Login</NavLink>
        </Menu.Item>,
      ];
    }

    return [
      <Menu.Item key="logout" title="Logout" style={item_style}>
        <NavLink to="/logout">Login</NavLink>
      </Menu.Item>,
      <Menu.Item key="User" title="user" style={item_style}>
        <NavLink to="/my">
          <Icon type="user" />
          {username}
        </NavLink>
      </Menu.Item>,
    ];
  }

  menu({ mode }) {
    let item_style = {
      alignContent: "right",
      fontWeight: "bold",
      justifyContent: "space-around",
      alignItems: "center",
      fontSize: "18px",
    };
    if (mode === "horizontal") {
      item_style["paddingTop"] = "20px";
    }
    return (
      <UserContext.Consumer>
        {context => (
          <Menu mode={mode} style={{ float: "right" }}>
            <Menu.Item key="usecase" title="Use Case" style={item_style}>
              <NavLink to={"/usecase"}>Use Case</NavLink>
            </Menu.Item>
            <Menu.Item key="evaluations" title="Evaluations" style={item_style}>
              <NavLink to={"/evaluations"}>Evaluations</NavLink>
            </Menu.Item>
            <Menu.Item key="demo" title="Demo" style={item_style}>
              <NavLink to={"/experiment"}>Demo</NavLink>
            </Menu.Item>
            <Menu.Item key="news" title="News" style={item_style}>
              <NavLink to={"/experiment"}>News</NavLink>
            </Menu.Item>
            <Menu.Item key="about" title="About" style={item_style}>
              <a href="https://docs.mlmodelscope.org/">About</a>
            </Menu.Item>
            {this.renderUser({ username: context.username, item_style })}
          </Menu>
        )}
      </UserContext.Consumer>
    );
  }

  toggleMobileMenuOpen() {
    this.setState({ mobile_menu_open: !this.state.mobile_menu_open });
  }

  render() {
    const { mobile_menu_open } = this.state;
    // console.log({ windowWidth, is_mobile, mobile_menu_open, is_mobile_menu_open });
    return (
      <ViewContext.Consumer>
        {context => (
          <Header
            style={{
              backgroundColor: "white",
              height: "auto",
              minHeight: "60px",
              paddingTop: "10px",
            }}
          >
            <NavLink to={"/"} style={{ float: "left", color: "#000", fontSize: "24px" }}>
              <b>MLModelScope</b>
            </NavLink>
            {context.isMobile && !mobile_menu_open ? (
              <Icon
                style={{
                  float: "right",
                  paddingTop: "24px",
                  fontSize: "2em",
                }}
                onClick={() => this.toggleMobileMenuOpen()}
                className="iconHamburger"
                type="menu"
                theme="outlined"
              />
            ) : null}
            <Drawer
              placement="right"
              closable={true}
              onClose={() => this.toggleMobileMenuOpen()}
              visible={context.isMobile && mobile_menu_open}
            >
              <Menu>{this.menu({ mode: "inline" })}</Menu>
            </Drawer>
            {context.isMobile ? null : this.menu({ mode: "horizontal" })}
          </Header>
        )}
      </ViewContext.Consumer>
    );
  }
}
