import React, { Component } from "react";
import { Layout, Table, Divider, Row, Col } from "antd";
import ExperimentContentTitle from "../ExperimentSteps/ExperimentContentTitle";
import PrimaryButton from "../Buttons/PrimaryButton";
import UserContext from "../../context/UserContext";
import { Redirect } from "react-router-dom";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
const { Content } = Layout;

export default class PersonalDataset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: "uploaded"
    }
  }

  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type"
      },
      {
        title: "Instances",
        dataIndex: "instances",
        key: "instances"
      },
      {
        title: "Size",
        dataIndex: "size",
        key: "size"
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
            <Divider type="vertical" />
            <a href="javascript:;">Experiment</a>
          </span>
        ),
      }
    ]
    const dataSource = [
      {
        name: "dataset_1",
        type: "image",
        size: "5GB",
        instances: 800,
      }
    ]
    return (
      <Content>
        <Row
            style={{
              background: "#1A263A",
              color: "white",
              paddingLeft: "60px",
              paddingTop: "20px",
            }}
          >
            <Col
              sm={8}
              md={6}
              lg={4}
              key={"uploaded"}
              style={{
                color: this.state.current === "uploaded" ? "#E84A27" : "white",
              }}
              onClick={() => this.setState({ current: "uploaded" })}
            >
              Uploaded Dataset
            </Col>
            <Col
              sm={8}
              md={6}
              lg={4}
              key={"upload"}
              style={{
                color: this.state.current === "upload" ? "#E84A27" : "white",
              }}
              onClick={() => this.setState({ current: "upload" })}
            >
              Upload a new Dataset
            </Col>
          </Row>
        <ExperimentContentTitle text="PersonalDataset" />
        <Table dataSource={dataSource} columns={columns} style={{maxWidth: "800px", marginTop: "50px", marginLeft: "auto", marginRight: "auto"}}/>
      </Content>
    )
  }
}