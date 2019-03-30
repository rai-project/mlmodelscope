import React, { Component } from "react";
import { Layout, Menu, Icon, Drawer, Button } from "antd";
import { NavLink } from "react-router-dom";
import windowSize from "react-window-size";
import UserContext from "../../context/UserContext"; // eslint-disable-line

const { Header } = Layout;

class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_menu_open: false,
    };
    this.renderUser = this.renderUser.bind(this);
    this.menu = this.menu.bind(this);
    this.toggleMobileMenuOpen = this.toggleMobileMenuOpen.bind(this);
  }

  renderUser(username) {
    if (username == null) {
      return (
        <React.Fragment>
          <div className="GlobalHeader-right-block">
            <h3>Sign Up</h3>
          </div>
          <NavLink to="/login">
            <div className="GlobalHeader-right-block">
              <h3>Login</h3>
            </div>
          </NavLink>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className="GlobalHeader-right-block">
          <h3>Log Out</h3>
        </div>
        <NavLink to="/my">
          <div className="GlobalHeader-right-block">
            <h3>
              <Icon type="user" />
              {username}
            </h3>
          </div>
        </NavLink>
      </React.Fragment>
    );
  }

  menu({ mode }) {
    const item_style = {
      paddingTop: "20px",
      float: "right",
      alignContent: "right",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    };
    return (
      <Menu mode={mode} style={{ float: "right" }}>
        <Menu.Item key="news" title="News" style={item_style}>
          <NavLink to={"/experiment"}>
            <h3>News</h3>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="usage" title="Usage" style={item_style}>
          <NavLink to={"/experiment"}>
            <h3>Usage</h3>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="experiment" title="Experiment" style={item_style}>
          <NavLink to={"/experiment"}>
            <h3>Experiment</h3>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="about" title="About" style={item_style}>
          <a href="https://docs.mlmodelscope.org/">
            <h3>About</h3>
          </a>
        </Menu.Item>
        {/* <UserContext.Consumer>{context => this.renderUser(context.username)}</UserContext.Consumer> */}
      </Menu>
    );
  }

  toggleMobileMenuOpen() {
    this.setState({ mobile_menu_open: !this.state.mobile_menu_open });
  }

  render() {
    const breakpoint = 640;
    const { windowWidth } = this.props;
    const { mobile_menu_open } = this.state;
    const is_mobile = windowWidth <= breakpoint;
    const is_mobile_menu_open = is_mobile && mobile_menu_open;
    // console.log({ windowWidth, is_mobile, mobile_menu_open, is_mobile_menu_open });
    return (
      <Header
        style={{
          backgroundColor: "white",
          height: "auto",
          minHeight: "60px",
          paddingTop: "20px",
        }}
      >
        <NavLink to={"/"} style={{ float: "left", color: "#000", fontSize: "24px" }}>
          ML<b>ModelScope</b>
        </NavLink>
        {is_mobile && !is_mobile_menu_open ? (
          <Icon
            style={{
              float: "right",
              paddingTop: "20px",
            }}
            onClick={() => this.toggleMobileMenuOpen()}
            type="bars"
          />
        ) : null}
        <Drawer
          placement="right"
          closable={true}
          onClose={() => this.toggleMobileMenuOpen()}
          visible={is_mobile_menu_open}
        >
          <Menu>{this.menu({ mode: "inline" })}</Menu>
        </Drawer>
        {is_mobile ? null : this.menu({ mode: "horizontal" })}
      </Header>
    );
  }
}

export default windowSize(GlobalHeader);
