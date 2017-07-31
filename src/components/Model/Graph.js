import React from "react";

import Cytoscape from "./Cytoscape";

// eslint-disable-next-line
const fillcolors = {
  data: "#8dd3c7",
  FullyConnected: "#fb8072",
  Convolution: "#fb8072",
  LeakyReLU: "#0fffb3",
  Activation: "#0fffb3",
  BatchNorm: "#bebada",
  Pooling: "#80b1d3",
  Flatten: "#fdb462",
  Reshape: "#fdb462",
  Concat: "#fdb462",
  LinearRegressionOutput: "#b3de69",
  MAERegressionOutput: "#b3de69",
  SVMOutput: "#b3de69",
  LogisticRegressionOutput: "#b3de69",
  SoftmaxOutput: "#b3de69",
  any: "#fccde5" // default value
};
// eslint-disable-next-line
const edgecolors = [
  "#245b51",
  "#941305",
  "#999900",
  "#3b3564",
  "#275372",
  "#975102",
  "#597d1c",
  "#90094e"
];

const cyStyle = {
  height: "400px",
  display: "block"
};

export default function ModelGraph({ header = null, divider = null, graph }) {
  if (!graph) {
    return <div />;
  }

  const isLikeWeight = name => {
    if (name.endsWith("_weight")) {
      return true;
    }
    if (name.endsWith("_bias")) {
      return true;
    }
    if (
      name.endsWith("_beta") ||
      name.endsWith("_gamma") ||
      name.endsWith("_moving_var") ||
      name.endsWith("_moving_mean")
    ) {
      return true;
    }
    return false;
  };

  const flatten = list =>
    list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

  let nodes = [];
  let edges = [];
  let hidden = {};

  const nodeList = graph.nodesList;
  nodes = flatten(
    nodeList.map(nd => {
      if (nd.op === "null" || isLikeWeight(nd.name)) {
        hidden[nd.name] = true;
        return [];
      }
      let color = fillcolors[nd.op];
      if (!color) {
        color = fillcolors.any;
      }
      return [
        {
          data: {
            id: nd.name,
            faveColor: color
          }
        }
      ];
    })
  );
  edges = flatten(
    nodeList.map(nd => {
      const op = nd.op;
      if (op === "null") {
        return [];
      }
      const name = nd.name;
      const inputs = nd.inputsList;
      return inputs.map(item => {
        const inputNode = nodeList[item.nodeId];
        const inputName = inputNode.name;
        if (hidden[inputName]) {
          return [];
        }
        return { data: { source: inputName, target: name } };
      });
    })
  );

  return (
    <div style={cyStyle}>
      {divider}
      {header}
      <Cytoscape containerStyle={cyStyle} elements={{ nodes, edges }} />
    </div>
  );
}
