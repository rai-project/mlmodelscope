import React, { Component } from "react";
import _ from "lodash";
import isPromise from "is-promise";
import Iframe from "react-iframe";
import { Divider } from "antd";
import { Chart, Geom, Axis, Tooltip, Coord } from "bizcharts";

export default class TraceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: null,
    };
  }

  async componentDidMount() {
    try {
      var traceData = fetch("http://trace.mlmodelscope.org:16686/api/traces/" + this.props.traceID);
      // const traceData = require("../../docs/sampleTraceData.json");
      if (isPromise(traceData)) {
        console.log("isPromise");
        traceData = await traceData;
        if (!_.isString(traceData)) {
          console.log("isString");
          traceData = await traceData.json();
        }
      }
      let layersInfo = _.filter(
        traceData.data[0].spans,
        e => _.find(e.tags, tag => tag.key === "layer_sequence_index") !== undefined
      );
      console.log(layersInfo);
      let graphData = layersInfo.map(layer => {
        return { layer: layer.operationName, duration: layer.duration };
      });
      console.log(graphData);
      this.setState({ graphData: graphData });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Divider />
        <h1 style={{ textAlign: "center" }}>
          <a href={this.props.traceURL}> Profile Trace </a>
        </h1>
        <Iframe position="relative" url={this.props.traceURL} width="100%" height="500px" />
        <Divider />
        {this.state.graphData !== null && (
          <div style={{ marginTop: "40px" }}>
            <h1 style={{ textAlign: "center" }}>Layer durations Information</h1>
            <Chart
              padding="auto"
              height={this.state.graphData.length * 20}
              data={this.state.graphData}
              forceFit
            >
              <Coord transpose />
              <Axis name="layer" labelOffset={10} />
              <Axis name="duration" />
              <Tooltip />
              <Geom type="interval" position="layer*duration" />
            </Chart>
          </div>
        )}
      </React.Fragment>
    );
  }
}
