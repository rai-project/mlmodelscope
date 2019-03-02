import React, { Component } from "react";
import idx from "idx";
import { Tabs } from "antd";
import { sortBy, isNil, toUpper } from "lodash";
import { Table } from "antd";
import TraceInfo from "./TraceInfo";

function processNameClassification({ classification: { label } }) {
  const lower = label
    .split(",")[0]
    .split(" ")
    .slice(1)
    .join(" ");
  const result = lower.charAt(0).toUpperCase() + lower.substr(1);
  return result;
}
function processName(item) {
  const { type } = item;
  switch (toUpper(type)) {
    case "CLASSIFICATION":
      return processNameClassification(item);
    default:
      return "unknown_type_" + type;
  }
}

function processResponseFeatures(response) {
  response = sortBy(response, ["probability"]).reverse();
  response.forEach(function(item, index) {
    item["name"] = processName(item);
  });
  return response.slice(0, 10);
}

function renderResult(d, target, imgIndex) {
  if (isNil(d)) {
    return null;
  }
  const traceURL = d.traceId
    ? `http://trace.mlmodelscope.org:16686/trace/${d.traceId}?embed`
    : null;
  const responseHeader = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Probability",
      dataIndex: "probability",
      key: "probability"
    }
  ];
  
  return (
      <div>
        <div
          style={{
            marginTop: "40px",
            marginLeft: "20%",
            marginRight: "20%"
          }}
        >
          <Table
            dataSource={processResponseFeatures(
              idx(d, _ => _.response[imgIndex].features)
            )}
            columns={responseHeader}
            showHeader={true}
            pagination={false}
            style={{
              width: "60%",
              marginLeft: "20%",
              marginRight: "20%",
              marginTop: "20px"
            }}
          />
        </div>

        {d.traceId ? (
          <TraceInfo traceURL={traceURL} traceID={d.traceId} />
        ) : null}
      </div>
    );
}

export default class ResultTab extends Component {
  constructor(props) {
    super(props);
    this.target = this.props.target;
    this.data = this.props.data;
  }

  render() {
    var target = this.props.target;
    var imgIndex = this.props.imgIndex;
    return(
      <Tabs defaultActiveKey="0">
        {
          this.data.map(function(d, index) {
            return(
              <Tabs.TabPane tab={d[target].name + " V" + d[target].version} key={index}>
              {
              renderResult(d, target, imgIndex)
            })}
              </Tabs.TabPane>
            )
          })
        }
      </Tabs>
    )
  }
}