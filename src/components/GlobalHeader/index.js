import React, { Component } from "react";
import { Layout, Menu, Icon, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import UserContext from "@context/UserContext"; // eslint-disable-line
import withSizes from "react-sizes";
import { withRouter } from "react-router-dom";
import Color from "color";
import { css } from "glamor";
import { MLModelScope } from "@components/Common";

const { Header } = Layout;

const userLoginEnabled = false;

@withRouter
@withSizes(({ width }, { breakpoint }) => ({ isMobile: width < breakpoint }))
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

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  toggleMobileMenuOpen() {
    this.setState({ mobile_menu_open: !this.state.mobile_menu_open });
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 50,
      headerEl = document.getElementById("global-header");
    console.log(headerEl);
    if (distanceY > shrinkOn) {
      headerEl.classList.add("shrink");
    } else {
      headerEl.classList.remove("shrink");
    }
  }

  renderUser({ username, menu_item_style, link_style, link_active_style }) {
    if (userLoginEnabled === false) {
      return null;
    }
    if (username == null) {
      return [
        <Menu.Item key="signup" title="Sign up" style={menu_item_style}>
          Sign Up
        </Menu.Item>,
        <Menu.Item key="login" title="Login" style={menu_item_style}>
          <NavLink to="/login">Login</NavLink>
        </Menu.Item>,
      ];
    }

    return [
      <Menu.Item key="logout" title="Logout" style={item_style}>
        <NavLink to="/logout" style={link_style} link_active_style={link_active_style}>
          Login
        </NavLink>
      </Menu.Item>,
      <Menu.Item key="User" title="user" style={item_style}>
        <NavLink to="/my" style={link_style} link_active_style={link_active_style}>
          <Icon type="user" />
          {username}
        </NavLink>
      </Menu.Item>,
    ];
  }

  menu({ mode, theme, activeLinkKey }) {
    const menu_item_style = css({
      alignContent: "right",
      justifyContent: "space-around",
      alignItems: "center",
    });
    const link_style = css({
      fontSize: "16px",
      "&:hover": {
        // background: Color("#19263a")
        //   .lighten(0.2)
        //   .hex(),

        textWeight: "bold",
        borderBottom: "2px solid currentColor",
      },
    });

    const link_active_style = css({ fontWeight: "600" });

    return (
      <UserContext.Consumer>
        {context => (
          <Menu
            theme={theme}
            selectedKeys={[`${activeLinkKey.replace(/^\/|\/$/g, "")}`]}
            mode={mode}
            style={{ float: "right", lineHeight: "64px" }}
          >
            <Menu.Item key="usecases" {...menu_item_style}>
              <NavLink
                to={"/usecases"}
                {...link_style}
                link_active_style={link_active_style}
              >
                Use Case
              </NavLink>
            </Menu.Item>
            <Menu.Item key="evaluations" {...menu_item_style}>
              <NavLink
                to={"/evaluations"}
                {...link_style}
                link_active_style={link_active_style}
              >
                Evaluations
              </NavLink>
            </Menu.Item>
            <Menu.Item key="playground" {...menu_item_style}>
              <NavLink
                to={"/playground"}
                {...link_style}
                link_active_style={link_active_style}
              >
                Playground
              </NavLink>
            </Menu.Item>
            <Menu.Item key="news" {...menu_item_style}>
              <NavLink to={"/news"} {...link_style} link_active_style={link_active_style}>
                News
              </NavLink>
            </Menu.Item>
            <Menu.Item key="about" {...menu_item_style}>
              <a {...link_style} href="https://docs.mlmodelscope.org/">
                About
              </a>
            </Menu.Item>
            {/*
            {this.renderUser({
              username: context.username,
              menu_item_Style,
              link_style,
              link_active_style,
            })}
          */}
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
        id="global-header"
        className="show-shadow"
        style={{
          backgroundColor: "#19263a",
          position: "fixed",
          zIndex: "1",
          width: "100%",
        }}
      >
        <NavLink to={"/"} style={{ float: "left", color: "white", fontSize: "20px" }}>
          <MLModelScope />
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

export default GlobalHeader;
