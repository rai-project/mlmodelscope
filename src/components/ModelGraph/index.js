import React from "react";

import Cytoscape from "./Cytoscape";

// eslint-disable-next-line
const fillcolors = [
  "#8dd3c7",
  "#fb8072",
  "#ffffb3",
  "#bebada",
  "#80b1d3",
  "#fdb462",
  "#b3de69",
  "#fccde5"
];
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

export default function ModelGraph({ graph }) {
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
      if (nd.op === "null" && isLikeWeight(nd.name)) {
        hidden[nd.name] = true;
        return [];
      }
      return [
        {
          data: {
            id: nd.name
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
      <Cytoscape containerStyle={cyStyle} elements={{ nodes, edges }} />
    </div>
  );
}
