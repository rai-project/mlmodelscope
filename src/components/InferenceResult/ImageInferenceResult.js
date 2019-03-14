import "./InferenceResult.css";
import React, { Component } from "react";
import { groupBy } from "lodash";
import { Collapse, Spin, Radio, Pagination } from "antd";
import { ExperimentContext } from "../../context/ExperimentContext";
import ResultTab from "./ResultTab";
import { Result } from "antd-mobile";

function groupByFramework(response) {
  // console.log(response)
  return groupBy(response, e => e.framework.name + " V" + e.framework.version);
}

function groupByModel(response) {
  // console.log(response)
  return groupBy(response, e => e.model.name + " V" + e.model.version);
}

class ImageInferenceResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      page: 1,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(pageNumber) {
    this.setState({ page: pageNumber });
  }

  render() {
    const frameworkGroup = groupByFramework(this.props.context.result);
    const modelGroup = groupByModel(this.props.context.result);
    let imageIndex = this.state.page - 1;
    let imageUrl = this.props.context.imageUrls[imageIndex]

    if (this.props.context.result === null) {
      return (
        <div style={{ width: "100%", marginTop: "20%", marginLeft: "50%" }}>
          <Spin size="large" />
        </div>
      );
    } else {
      return (
        <div>
          <React.Fragment>
            <div>
              <div
                style={{
                  marginTop: "40px",
                  marginLeft: "20%",
                  marginRight: "20%",
                }}
              >
                <img
                  src={imageUrl}
                  style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}
                  alt=""
                />
              </div>

              <React.Fragment>
                <Radio.Group
                  style={{ marginTop: "20px", marginLeft: "auto" }}
                  onChange={e => this.setState({ value: e.target.value })}
                  value={this.state.value}
                >
                  <Radio value={1}>Compare Model</Radio>
                  <Radio value={2}>Compare Framework</Radio>
                </Radio.Group>

                <Collapse style={{ marginTop: "20px" }}>
                  {this.state.value === 1
                    ? Object.keys(frameworkGroup).map(function(key, index) {
                        return (
                          <Collapse.Panel header={key} key={index.toString()}>
                            <ResultTab
                              target="model"
                              data={frameworkGroup[key]}
                              imgIndex={imageIndex}
                              imgUrl={imageUrl}
                            />
                          </Collapse.Panel>
                        );
                      })
                    : Object.keys(modelGroup).map(function(key, index) {
                        return (
                          <Collapse.Panel header={key} key={index.toString()}>
                            <ResultTab
                              target="framework"
                              data={modelGroup[key]}
                              imgIndex={imageIndex}
                              imgUrl={imageUrl}
                            />
                          </Collapse.Panel>
                        );
                      })}
                </Collapse>
              </React.Fragment>
            </div>
            <Pagination
              style={{ marginTop: "20px", float: "right" }}
              showQuickJumper
              current={this.state.page}
              total={this.props.context.imageUrls.length}
              pageSize={1}
              onChange={pageNumber => this.setState({ page: pageNumber })}
            />
          </React.Fragment>
        </div>
      );
    }
  }
}

export default props => (
  <ExperimentContext.Consumer>
    {context => <ImageInferenceResult {...props} context={context} />}
  </ExperimentContext.Consumer>
);
