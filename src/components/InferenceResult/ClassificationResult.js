import React, { Component } from "react";
import idx from "idx"
import { sortBy, isNil, toUpper } from "lodash";
import { Table } from "antd";

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

export default class ClassificationResult extends Component {
  constructor(props) {
    super(props);
    this.features = this.props.features
  }
 
  render() {
    if (isNil(this.features)) {
      return null;
    }
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
      <div
        style={{
          marginTop: "40px",
        }}
      >
        <Table
          dataSource={processResponseFeatures(this.features)}
          columns={responseHeader}
          showHeader={true}
          pagination={false}
          style={{
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "20px"
          }}
        />
      </div>
    );
  }
}