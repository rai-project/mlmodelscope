import React, { Component } from "react";
import Helmet from "react-helmet";
import { Layout } from "antd";
import SelectDataset from "../components/ExperimentSteps/SelectDataset";
import ExperimentSetupSider from "../components/ExperimentSteps/ExperimentSetupSider";
import SelectTask from "../components/ExperimentSteps/SelectTask";
import SelectModel from "../components/ExperimentSteps/SelectModel";
import SelectMachine from "../components/ExperimentSteps/SelectMachine";
import InferenceResult from "../components/InferenceResult";
import ExperimentProvider, { ExperimentContext } from "../context/ExperimentContext";
import Error from "../components/Error";

export default class ExperimentPage extends Component {
  renderCurrentPage(currentPage) {
    switch (currentPage) {
      case "task":
        return <SelectTask />;
      case "dataset":
        return <SelectDataset />;
      case "model":
        return <SelectModel />;
      case "machine":
        return <SelectMachine />;
      case "predict":
        return <InferenceResult />;
      default:
        console.log({ error: "route page not found" });
        break;
    }
  }
  render() {
    return (
      <Layout style={{ background: "#E8E9EB" }}>
        <Helmet title="Experiment" meta={[{ property: "og:title", content: "Experiment" }]} />
        <ExperimentProvider>
          <ExperimentSetupSider />
          <Error>
            <ExperimentContext.Consumer>
              {ctx => this.renderCurrentPage(ctx.currentPage)}
            </ExperimentContext.Consumer>
          </Error>
        </ExperimentProvider>
      </Layout>
    );
  }
}