import React, { Component } from "react";
import { Layout, Menu, Icon, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext"; // eslint-disable-line
import withSizes from "react-sizes";
import { withRouter } from "react-router-dom";

const { Header } = Layout;

const userLoginEnabled = false;

const mapSizesToProps = ({ width }, { breakpoint }) => ({
  isMobile: width < breakpoint,
});

class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_menu_open: false,
    };
    this.toggleMobileMenuOpen = this.toggleMobileMenuOpen.bind(this);
    this.renderUser = this.renderUser.bind(this);
    this.menu = this.menu.bind(this);
  }

  toggleMobileMenuOpen() {
    this.setState({ mobile_menu_open: !this.state.mobile_menu_open });
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

  menu({ mode, theme, activeLinkKey }) {
    let item_style = {
      alignContent: "right",
      fontWeight: "bold",
      justifyContent: "space-around",
      alignItems: "center",
      fontSize: "16px",
    };

    console.log(activeLinkKey);
    return (
      <UserContext.Consumer>
        {context => (
          <Menu
            theme={theme}
            selectedKeys={[`${activeLinkKey.replace(/^\/|\/$/g, "")}`]}
            mode={mode}
            style={{ float: "right", lineHeight: "64px" }}
          >
            <Menu.Item key="usecases" title="Use Cases" style={item_style}>
              <NavLink to={"/usecases"}>Use Case</NavLink>
            </Menu.Item>
            <Menu.Item key="evaluations" title="Evaluations" style={item_style}>
              <NavLink to={"/evaluations"}>Evaluations</NavLink>
            </Menu.Item>
            <Menu.Item key="experiment" title="Playground" style={item_style}>
              <NavLink to={"/experiment"}>Playground</NavLink>
            </Menu.Item>
            <Menu.Item key="news" title="News" style={item_style}>
              <NavLink to={"/news"}>News</NavLink>
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

  render() {
    const { mobile_menu_open } = this.state;
    const { isMobile } = this.props;
    const activeLinkKey = this.props.location.pathname;
    return (
      <Header
        className="show-shadow"
        style={{
          backgroundColor: "#19263a",
          position: "fixed",
          zIndex: "1",
          width: "100%",
        }}
      >
        <NavLink to={"/"} style={{ float: "left", color: "white", fontSize: "20px" }}>
          <b>MLModelScope</b>
        </NavLink>
        {isMobile && !mobile_menu_open ? (
          <Icon
            style={{
              float: "right",
              paddingTop: "20px",
              fontSize: "2em",
              color: "white",
            }}
            onClick={() => this.toggleMobileMenuOpen()}
            className="iconHamburger"
            type="menu"
            theme="outlined"
          />
        ) : null}
        <Drawer
          title="MLModelScope"
          placement="right"
          closable={true}
          onClose={() => this.toggleMobileMenuOpen()}
          visible={isMobile && mobile_menu_open}
          style={{ color: "#19263A" }}
        >
          {this.menu({ mode: "inline", theme: "light", activeLinkKey })}
        </Drawer>
        {isMobile
          ? null
          : this.menu({ mode: "horizontal", theme: "dark", activeLinkKey })}
      </Header>
    );
  }
}

export default withRouter(withSizes(mapSizesToProps)(GlobalHeader));
