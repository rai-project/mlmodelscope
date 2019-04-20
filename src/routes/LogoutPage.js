import React, { Component } from "react";
import Helmet from "react-helmet";
import { Layout, Form, Icon, Input } from "antd";
import { Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { Logout } from "../swagger/index";

class LogoutPage extends Component {
  componentDidMount() {
    Logout().then(() => this.props.context.logout())
  }
  render() {
    return (
      <Layout style={{ minHeight: 700 }}>
        <Helmet title="Login" meta={[{ property: "og:title", content: "Login" }]} />
        <header className="DarkBlue">
          <div style={{ marginTop: "40px", marginBottom: "40px", textAlign: "center" }}>
            <h1 style={{ color: "white" }}> {this.props.context.username === null ? "You have logged out" : "Logging out"} </h1>
          </div>
        </header>
      </Layout>
    );
  }
}

export default props => (
  <UserContext.Consumer>
    {context => <LogoutPage {...props} context={context} />}
  </UserContext.Consumer>
);
