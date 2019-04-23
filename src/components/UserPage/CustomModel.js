import React, { Component } from "react";
import { Layout, Table, Divider } from "antd";
import ExperimentContentTitle from "../ExperimentSteps/ExperimentContentTitle";
import PrimaryButton from "../Buttons/PrimaryButton";
import UserContext from "../../context/UserContext";
import { Redirect } from "react-router-dom";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
const { Content } = Layout;

export default class CustomModel extends Component {
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Task",
        dataIndex: "task",
        key: "task"
      },
      {
        title: "Framework",
        dataIndex: "framework",
        key: "framework"
      }, 
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="javascript:;">Details</a>
            <Divider type="vertical" />
            <a href="javascript:;">Update</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        ),
      }
    ]
    const dataSource = [
      {
        name: "model_1",
        task: "classification",
        framework: "tensorflow",
      }
    ]
    return (
      <Content>
        <ExperimentContentTitle text="Custom Model Library" />
        <Table dataSource={dataSource} columns={columns} style={{maxWidth: "800px", marginTop: "50px", marginLeft: "auto", marginRight: "auto"}}/>
      </Content>
    )
  }
}