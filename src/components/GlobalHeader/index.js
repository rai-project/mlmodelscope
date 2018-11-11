import React, { Component } from "react";
import "./GlobalHeader.css";
import { Layout, Icon } from "antd";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext"; // eslint-disable-line

const { Header } = Layout;

export default class GlobalHeader extends Component {
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

  render() {
    return (
      <Header className="GlobalHeader-header">
        <div className="GlobalHeader-left-block">
          <NavLink to={"/"}>
            <h2>
              ML <b>ModelScope</b>
            </h2>
          </NavLink>
        </div>
        <div className="GlobalHeader-left-block">
          <NavLink to={"/experiment"}>
            <h3>Experiment Setup</h3>
          </NavLink>
        </div>
        <div className="GlobalHeader-left-block">
          <a href="https://docs.mlmodelscope.org/">
            <h3>About</h3>
          </a>
        </div>
        {/* <UserContext.Consumer>{context => this.renderUser(context.username)}</UserContext.Consumer> */}
      </Header>
    );
  }
}
