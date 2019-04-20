import React, { Component } from "react";
import { Layout, Menu } from "antd";
import UserContext from "../context/UserContext";
import { Redirect } from "react-router-dom";
const { Sider, Content } = Layout;

class UserPage extends Component {
  render() {
    if (this.props.context.loading) {
      return (
        <div>Loading</div>
      )
    } else if (this.props.context.username === null) {
      return(<Redirect to="/login" />)
    }

    return(
      <Layout>
      <Sider>
        <div className="Experiment-setup-title-bar Experiment-setup-sider-bar">
          <h3 style={{ color: "white" }}>MY PAGE</h3>
        </div>

        <Menu
          mode="inline"
          selectedKeys="profile"
          style={{ border: 1 }}
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
            <div style={{color: "white"}}>MY PROFILE</div>
          </Menu.Item>
          {/* <Menu.Item
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
          </Menu.Item> */}
          </Menu>
      </Sider>
      <Content>
        <div style={{width: "100%", textAlign: "center"}}>
          {"Username: " + this.props.context.username}
        </div>
      </Content>
      </Layout>
    )
  }
}

export default props => (
  <UserContext.Consumer>
    {context => <UserPage {...props} context={context} />}
  </UserContext.Consumer>
);
