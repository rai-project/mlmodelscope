import React, { Component } from "react";
import Helmet from "react-helmet";
import { Layout, Form, Icon, Input } from "antd";
import { Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e, context) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        context.logIn(values.userName);
        this.props.logIn();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <UserContext.Consumer>
        {context => (
          <Form onSubmit={e => this.handleSubmit(e, context)}>
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [{ required: true, message: "Please input your username!" }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Please input your Password!" }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              <PrimaryButton htmlType="submit" text="Log In" style={{ width: "100%" }} />
            </FormItem>
          </Form>
        )}
      </UserContext.Consumer>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default class ExperimentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  logIn = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    return this.state.loggedIn ? (
      <Redirect to="/experiment" />
    ) : (
      <Layout className="LightGray" style={{ minHeight: 700 }}>
        <Helmet title="Login" meta={[{ property: "og:title", content: "Login" }]} />
        <header className="DarkBlue">
          <div style={{ marginTop: "40px", marginBottom: "40px", textAlign: "center" }}>
            <h1 style={{ color: "white" }}> Log into ML ModelScope </h1>
          </div>
        </header>

        <div className="CenterBlock" style={{ marginTop: "40px", width: "40%" }}>
          <WrappedNormalLoginForm logIn={this.logIn} />
        </div>
      </Layout>
    );
  }
}
