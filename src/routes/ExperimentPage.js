import React, { Component } from "react";
import Helmet from "react-helmet";
import { Layout } from "antd";
import SelectDataset from "../components/ExperimentSteps/SelectDataset";
import ExperimentSetupSider from "../components/ExperimentSteps/ExperimentSetupSider";
import SelectModel from "../components/ExperimentSteps/SelectModel";
import SelectFramework from "../components/ExperimentSteps/SelectFramework";
import SelectMachine from "../components/ExperimentSteps/SelectMachine";
import InferenceResult from "../components/InferenceResult";
import ExperimentProvider from "../context/ExperimentContext";
import Error from "../components/Error";

const siderMenuNextStep = {
  dataset: "model",
  model: "framework",
  framework: "machine",
  machine: "predict",
};

export default class ExperimentPage extends Component {
  constructor(props) {
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.state = {
      current: "dataset",
      future: "model",
    };
  }

  handleChangePage(s) {
    if (s !== "predict") {
      this.setState({ current: s });
      this.setState({ future: siderMenuNextStep[s] });
    } else {
      this.setState({ current: s });
    }
  }

  render() {
    var currentPage = null;
    switch (this.state.current) {
      case "dataset":
        currentPage = <SelectDataset />;
        break;
      case "model":
        currentPage = <SelectModel />;
        break;
      case "framework":
        currentPage = <SelectFramework />;
        break;
      case "machine":
        currentPage = <SelectMachine />;
        break;
      case "predict":
        currentPage = <InferenceResult />;
        break;
      default:
        console.log({ error: "route page not found" });
        break;
    }

    return (
      <Layout style={{ background: "#E8E9EB" }}>
        <Helmet title="Experiment" meta={[{ property: "og:title", content: "Experiment" }]} />
        <ExperimentProvider>
          <ExperimentSetupSider
            onPageChange={this.handleChangePage}
            current={this.state.current}
            future={this.state.future}
            siderMenuNextStep={siderMenuNextStep}
          />
          <Error>
            {currentPage}
          </Error>
        </ExperimentProvider>
      </Layout>
    );
  }
}
