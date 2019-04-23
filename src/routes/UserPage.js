import React, { Component } from "react";
import { Layout, Menu } from "antd";
import ExperimentContentTitle from "../components/ExperimentSteps/ExperimentContentTitle";
import UserContext from "../context/UserContext";
import UserProfile from "../components/UserPage/UserProfile";
import SavedExperiment from "../components/UserPage/SavedExperiments";
import PersonalDataset from "../components/UserPage/PersonalDataset";
import CustomModel from "../components/UserPage/CustomModel";
import { Redirect } from "react-router-dom";
const { Sider, Content } = Layout;

class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "profile"
    }
  }
  render() {
    if (this.props.context.loading) {
      return (
        <div>Loading</div>
      )
    } else if (this.props.context.username === null) {
      return(<Redirect to="/login" />)
    }

    var content;
    switch (this.state.page) {
      case "profile":
        content =  <UserProfile />;
        break;
      case "savedExperiment":
        content = <SavedExperiment />;
        break;
      case "personalDataset":
        content = <PersonalDataset />;
        break;
      case "customModel":
        content = <CustomModel />;
        break;
      default:
        content = <div>page: {this.state.page} Not Implemented Yet</div>;
    }

    return(
      <Layout>
      <Sider style={{ height: "100%" }}>
        <div className="Experiment-setup-title-bar Experiment-setup-sider-bar">
          <h3 style={{ color: "white" }}>MY PAGE</h3>
        </div>

        <Menu
          mode="inline"
          selectedKeys={this.state.page}
          style={{ border: 1 }}
          onClick={(e) => this.setState({page: e.key})}
        >
          <Menu.Item
            key="profile"
            style={{
              color: this.state.page === "profile" ? "white" : "black",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingleft: "40px",
              minHeight: "40px",
              height: "auto",
            }}
          >
            MY PROFILE
          </Menu.Item>
          <Menu.Item
            key="savedExperiment"
            style={{
              color: this.state.page === "savedExperiment" ? "white" : "black",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingleft: "40px",
              minHeight: "40px",
              height: "auto",
              whiteSpace: "pre-wrap"
            }}
          >
            SAVED EXPERIMENT RESULTS
          </Menu.Item>
          <Menu.Item
            key="personalDataset"
            style={{
              color: this.state.page === "personalDataset" ? "white" : "black",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingleft: "40px",
              minHeight: "40px",
              height: "auto",
              whiteSpace: "pre-wrap"
            }}
          >
            PERSONAL DATASET LIBRARY
          </Menu.Item>
          <Menu.Item
            key="customModel"
            style={{
              color: this.state.page === "customModel" ? "white" : "black",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingleft: "40px",
              minHeight: "40px",
              height: "auto",
              whiteSpace: "pre-wrap"
            }}
          >
            CUSTOM MODELS 
          </Menu.Item>
          </Menu>
      </Sider>
      {content}
      </Layout>
    )
  }
}

export default props => (
  <UserContext.Consumer>
    {context => <UserPage {...props} context={context} />}
  </UserContext.Consumer>
);
