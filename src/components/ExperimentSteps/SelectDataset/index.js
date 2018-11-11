import React, { Component } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import PublicDataset from "./PublicDataset";
import ImportImgFromURL from "./ImportImgFromURL";
import UploadArea from "./UploadArea";

const { Content } = Layout;

const frameworks = [];
const models = [];

const datasetOptions = [
  { key: 0, name: "ilsvrc2012", description: "vision/ilsvrc2012", type: "image/classification" },
  { key: 1, name: "cifar10", description: "vision/cifar10", type: "image/classification" },
  { key: 2, name: "cifar100", description: "vision/cifar100", type: "image/classification" },
  { key: 3, name: "caltech256", description: "vision/caltech256", type: "image/classification" },
  { key: 4, name: "mnist", description: "vision/mnist", type: "image/classification" },
  { key: 5, name: "custom", description: "vision/custom", type: "image/classification" },
];

const dataSources = ["Public Dataset", "Import From URL", "Upload From Device"];

class ExperimentPage extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      dataSource: 1,
      current: null,
      displayInfo: false,
      predict: false,
      counts: [datasetOptions.length, models.length, frameworks.length, 0],
      selections: {
        data: Array(datasetOptions.length).fill(false),
        models: Array(models.length).fill(false),
        frameworks: Array(frameworks.length).fill(false),
        machines: [false],
      },
    };
  }

  handleSelect(key, i) {
    var selections = this.state.selections;
    selections[key][i] = !selections[key][i];
    this.setState({ selections: selections });
    var counts = this.state.counts;
    counts[1] = this.availableModels(selections).length;
    this.setState({ counts: counts });
  }

  render() {
    let dataSourceComponent;
    switch (this.state.dataSource) {
      case 0:
        dataSourceComponent = <PublicDataset datasetOptions={datasetOptions} />;
        break;
      case 1:
        dataSourceComponent = <ImportImgFromURL />;
        break;
      default:
        dataSourceComponent = <UploadArea />;
        break;
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
            {dataSources.map((source, index) => (
              <div
                key={`exp-dataSource-${index}`}
                style={{
                  display: "inline-block",
                  marginLeft: "40px",
                  color: this.state.dataSource === index ? "#E84A27" : "white",
                }}
                onClick={() => this.setState({ dataSource: index })}
              >
                {source}
              </div>
            ))}
            <h2 style={{ marginTop: "60px", marginLeft: "40px", color: "white" }}>
              Select the dataset that is most similar to your own
            </h2>
          </div>

          {dataSourceComponent}
        </Content>
      </Layout>
    );
  }
}

export default withRouter(ExperimentPage);
