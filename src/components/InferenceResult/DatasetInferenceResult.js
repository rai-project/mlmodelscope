import React, { Component } from "react";
import _ from "lodash";
import { ExperimentContext } from "../../context/ExperimentContext";
import { Table } from "antd";
import { accuracy as accuracyData } from "../../docs";
import LatencyGraph from "./LatencyGraph";
import LayersDurationGraph from "./LayersDurationGraph";

class DatasetInferenceResult extends Component {
  modelFullName(model) {
    return model.name.replace("-", "_") + "_" + model.version.replace(".", "_");
  }

  modelFrameworkFullName(model, framework) {
    return this.modelFullName(model) + "_" + framework.name + "_" + framework.version.replace(".", "_");
  }

  generateOverviewData(models, frameworks) {
    let columns = [
      {
        title: "Metric",
        dataIndex: "metric",
        key: "metric"
      }
    ];
    let overviewData = [
      {
        key: "1",
        metric: "Top 1 Accuracy"
      },
      {
        key: "1",
        metric: "Top 5 Accuracy"
      },
    ];

    let pairs = [];
    models.map(model =>
      frameworks.map(framework => pairs.push({ model: model, framework: framework }))
    );

    pairs.forEach((pair) => {
      let modelFrameworkFullName = this.modelFrameworkFullName(pair.model, pair.framework);
      let data = _.find(
        accuracyData[this.modelFullName(pair.model)],
        { framework_name: pair.framework.name, framework_version: pair.framework.version }
      );
      columns.push({ title: modelFrameworkFullName, dataIndex: modelFrameworkFullName, key: modelFrameworkFullName })
      overviewData[0][modelFrameworkFullName] = data.top1_accuracy;
      overviewData[1][modelFrameworkFullName] = data.top5_accuracy;
    });

    return ({ columns: columns, dataSource: overviewData });
  }

  render() {
    const frameworks = this.props.context.frameworks;
    const models = this.props.context.models;
    let overviewData = this.generateOverviewData(models, frameworks);

    return (
      <div style={{ marginTop: "40px" }}>
        <Table columns={overviewData.columns} dataSource={overviewData.dataSource} />
        {
          models.map((model) =>
            <LatencyGraph model={this.modelFullName(model)} />
          )}
          {
          models.map((model) =>
            <LayersDurationGraph model={this.modelFullName(model)} />
          )
        }
      </div>
    )
  }
}

export default props => (
  <ExperimentContext.Consumer>
    {context => <DatasetInferenceResult {...props} context={context} />}
  </ExperimentContext.Consumer>
);