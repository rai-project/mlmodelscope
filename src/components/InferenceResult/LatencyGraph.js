import React, { Component } from "react";
import _ from "lodash";
import isPromise from "is-promise";
import { latency_throughput as latencyThroughputData } from "../../docs";
import { ExperimentContext } from "../../context/ExperimentContext";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";
import DataSet from "@antv/data-set";

class LatencyGraph extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      frameworks: [
        { name: "Caffe", version: "1.0" },
        { name: "Caffe2", version: "0.8.1" },
        { name: "MXNet", version: "0.11.0" }
      ],
    }
  }

  async componentDidMount() {
    try {
      let data = latencyThroughputData[this.props.model]();
      if (isPromise(data)) {
        data = await data;
        if (!_.isString(data)) {
          data = await data.json();
        }
      }
      var groupedData = this.props.context.frameworks.map((framework) => {
        return _.filter(
          data,
          e =>
            _.toLower(e.framework_name).replace(/-/g, '_') ===
            _.toLower(framework.name).replace(/-/g, '_') &&
            e.machine_architecture === "amd64" &&
            e.host_name === "ip-172-31-42-188"
        )
      })
      console.log(groupedData);
      this.setState({ data: groupedData });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    if (this.state.data === null) {
      return (<div></div>)
    }
    var latencyData = this.state.data.map((group) => {
      let groupedData = { name: group[0].framework_name };
      group.forEach((item) => {
        groupedData[item.batch_size.toString()] = item.latency;
      })
      return (groupedData);
    });
    console.log(latencyData);
    const ds = new DataSet();
    const dv = ds.createView().source(latencyData);
    dv.transform({
      type: "fold",
      fields: ["1", "2", "4", "8", "16", "32", "48", "96", "128", "196", "256", "320", "384"],
      key: "Batch Size",
      value: "Latency"
    });
    return (
      <div>
        <h1>Latency Graph of {this.props.model} model on different frameworks</h1>
        <Chart height={400} data={dv} forceFit>
          <Axis name="Batch Size" title />
          <Axis name="Latency" title />
          <Legend />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="interval"
            position="Batch Size*Latency"
            color={"name"}
            adjust={[
              {
                type: 'dodge',
                marginRatio: 0,
              }
            ]}
          />
        </Chart>
      </div>
    );
  }
}

export default props => (
  <ExperimentContext.Consumer>
    {context => <LatencyGraph {...props} context={context} />}
  </ExperimentContext.Consumer>
);