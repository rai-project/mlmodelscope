import React, { Component } from "react";
import { Layout, Menu } from "antd";
import UserContext from "../context/UserContext";
import { Redirect } from "react-router-dom";
const { Sider } = Layout;

class UserPage extends Component {
  render() {
    return(
      this.props.context.username === null ?
      <Redirect to="/login" />
      :
      <div>
      <Sider width="300" style={{ width: "30%", background: "#E8E9EB" }}>
        <div className="Experiment-setup-title-bar Experiment-setup-sider-bar">
          <h3 style={{ color: "white" }}>MY PAGE</h3>
        </div>

        <Menu
          mode="inline"
          selectedKeys="profile"
          style={{ border: 1, backgroundColor: "#E8E9EB" }}
        >
          <Menu.Item
            key="profile"
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingleft: "40px",
              minHeight: "40px",
              height: "auto",
            }}
          >
            <div>MY PROFILE</div>
          </Menu.Item>
          <Menu.Item
            key="savedExperiment"
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingleft: "40px",
              minHeight: "40px",
              height: "auto",
            }}
          >
            <div>SAVED EXPERIMENT RESULTS</div>
          </Menu.Item>
          <Menu.Item
            key="personalDataset"
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingleft: "40px",
              minHeight: "40px",
              height: "auto",
            }}
          >
            <div>PERSONAL DATASET LIBRARY</div>
          </Menu.Item>
          </Menu>
      </Sider>
      </div>
    )
  }
}

export default props => (
  <UserContext.Consumer>
    {context => <UserPage {...props} context={context} />}
  </UserContext.Consumer>
);
