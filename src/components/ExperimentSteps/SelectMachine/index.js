import React, { Component } from "react";
import { Layout, Col, Row } from "antd";
import { isArray, find, upperCase } from "lodash";
import yeast from "yeast";
import { withRouter } from "react-router-dom";
import SelectableCard from "../SelectableCard/index";
import { FrameworkAgents } from "../../../swagger";
import { ExperimentContext } from "../../../context/ExperimentContext";

const { Content } = Layout;

class SelectMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    if (this.props.context.machineManifests === null) {
      try {
        // todo: need to filter based on what is selected
        const req = await FrameworkAgents({
          frameworkName: "*",
          frameworkVersion: "*",
        });
        this.props.context.setMachineManifests(req.agents);
      } catch (err) {
        console.error(err);
      }
    }
  }

  render() {
    const machineManifests = this.props.context.machineManifests;
    if (!isArray(machineManifests)) {
      return <div />;
    }
    return (
      <Layout style={{ background: "#E8E9EB", margin: "0px 20px 120px 20px" }}>
        <Content style={{}}>
          <div
            style={{
              background: "#1A263A",
              color: "white",
              paddingTop: "30px",
              paddingBottom: "60px",
            }}
          >
            <h2 style={{ marginTop: "60px", marginLeft: "40px", color: "white" }}>
              Select the machine
            </h2>
          </div>

          <div>
            <Row gutter={16}>
              {machineManifests.map((item, index) => (
                <Col key={yeast()} span={8} style={{ padding: "10px" }}>
                  <SelectableCard
                    title={upperCase(item.architecture)}
                    content={"Descriptions"}
                    tooltip={false}
                    onClick={() => this.props.context.addMachine(item.architecture)}
                    selected={find(this.props.context.machines, e => e.name === item.architecture)}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(props => (
  <ExperimentContext.Consumer>
    {context => <SelectMachine {...props} context={context} />}
  </ExperimentContext.Consumer>
));
