import React, { Component } from "react";
import { Layout, Table } from "antd";
import ExperimentContentTitle from "../ExperimentSteps/ExperimentContentTitle";
import PrimaryButton from "../Buttons/PrimaryButton";
import UserContext from "../../context/UserContext";
import { Redirect } from "react-router-dom";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
const { Content } = Layout;

export default class SavedExperiments extends Component {
  render() {
    const dataSource = [
      {
        id: "1",
        time: "2018-01-01",
        model: "",
        framework: "",
        machine: "",
        data: ""
      }
    ]
    return(
      <Content>
        <ExperimentContentTitle text="Saved Experiment Results" />
        <Table
          dataSource={dataSource}
          style={{maxWidth: "800px", marginTop: "50px", marginLeft: "auto", marginRight: "auto"}}>
          <Column
            title="ID"
            dataIndex="id"
            key="id"
          />
          <Column
            title="Time"
            dataIndex="time"
            key="time"
          />
          <ColumnGroup title="Experiment Setup">
            <Column
              title="Model"
              dataIndex="model"
              key="mode"
            />
            <Column
              title="Framework"
              dataIndex="framework"
              key="framework"
            />
            <Column
              title="Machine"
              dataIndex="machine"
              key="machine"
            />
            <Column
              title="Data"
              dataIndex="data"
              key="data"
            />
          </ColumnGroup>
          <Column
            title="Actions"
            key="actions"
            render={(text, record) => (
              <span>
                <a href="javascript:;">View</a>
              </span>
            )}
          />
        </Table>
      </Content>
    )
  }
}