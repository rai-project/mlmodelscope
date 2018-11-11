import React, { Component } from "react";

export const ExperimentContext = React.createContext();

export default class ExperimentProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batchSize: 1,
      traceLevel: "FULL_TRACE",
      isPredicting: true,
      imageUrls: [],
      dataset: [],
      models: [],
      frameworks: [],
      machines: [],
      result: null,
      modelManifests: null,
      frameworkManifests: null,
      machineManifests: null,
      addUrl: url =>
        this.setState({
          imageUrls: this.state.imageUrls.concat(url),
        }),
      addDataset: dataset =>
        this.setState({
          dataset: this.state.dataset.concat(dataset),
        }),
      addModel: (name, version) =>
        this.setState({
          models: this.state.models.concat({ name: name, version: version }),
        }),
      removeModel: index => {
        if (this.state.models.length === 1) {
          this.setState({ models: [] });
          return;
        }
        this.setState({ models: this.state.models.splice(index, 1) });
      },
      addFramework: (name, version) =>
        this.setState({
          frameworks: this.state.frameworks.concat({ name: name, version: version }),
        }),
      removeFramework: index => {
        if (this.state.frameworks.length === 1) {
          this.setState({ frameworks: [] });
          return;
        }
        this.setState({
          frameworks: this.state.frameworks.splice(index, 1),
        });
      },
      addMachine: (name, version) =>
        this.setState({
          machines: this.state.machines.concat({ name: name }),
        }),
      changeTraceLevel: newLevel =>
        this.setState({
          traceLevel: newLevel,
        }),
      setBatchSize: batchSize =>
        this.setState({
          batchSize: batchSize,
        }),
      startPredicting: () =>
        this.setState({
          isPredicting: true,
        }),
      finishPredicting: () =>
        this.setState({
          isPredicting: false,
        }),
      setPredictResult: result =>
        this.setState({
          result: result,
        }),
      setModelManifests: modelManifests =>
        this.setState({
          modelManifests: modelManifests,
        }),
      setFrameworkManifests: frameworkManifests =>
        this.setState({
          frameworkManifests: frameworkManifests,
        }),
      setMachineManifests: machineManifests =>
        this.setState({
          machineManifests: machineManifests,
        }),
    };
  }

  render() {
    return (
      <ExperimentContext.Provider value={this.state}>
        {this.props.children}
      </ExperimentContext.Provider>
    );
  }
}
