import React, { Component } from "react";

export const ExperimentContext = React.createContext();

export default class ExperimentProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "predict",
      batchSize: 1,
      traceLevel: "FULL_TRACE",
      useGPU: false,
      isPredicting: false,
      task: null,
      imageUrls: [],
      dataset: null,
      models: [],
      frameworks: [],
      machines: [],
      result: null,
      modelManifests: null,
      frameworkManifests: null,
      machineManifests: null,
      setPage: page => 
        this.setState({
          currentPage: page,
        }),
      setTask: task =>
        this.setState({
          task: task,
        }),
      addUrl: url =>
        this.setState({
          imageUrls: this.state.imageUrls.concat(url),
        }),
      addDataset: dataset =>
        this.setState({
          dataset: dataset,
        }),
      removeDataset: () => {
        this.setState({ dataset: null });
      },
      addModel: (model) => {
        this.setState({
          models: this.state.models.concat(model),
        })
      },
      removeUrls: () => {
        this.setState({ imageUrls: [] });
      },
      removeModel: index => {
        if (this.state.models.length === 1) {
          this.setState({ models: [] });
          return;
        }
        this.state.models.splice(index, 1)
        this.setState({ models: this.state.models });
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
        this.state.frameworks.splice(index, 1)
        this.setState({ frameworks: this.state.frameworks });
      },
      addMachine: (name, version) =>
        this.setState({
          machines: this.state.machines.concat({ name: name }),
        }),
      removeMachine: index => {
        if (this.state.machines.length === 1) {
          this.setState({ machines: [] });
          return;
        }
        this.state.machines.splice(index, 1)
        this.setState({ machines: this.state.machines });
      },
      changeTraceLevel: newLevel =>
        this.setState({
          traceLevel: newLevel,
        }),
      setBatchSize: batchSize =>
        this.setState({
          batchSize: batchSize,
        }),
      setUseGPU: checked => 
        this.setState({
          useGPU: checked
        }),
      startPredicting: () =>
        this.setState({
          isPredicting: true,
          result: null
        }),
      setPredictResult: result =>
        this.setState({
          result: result,
          isPredicting: false,
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
