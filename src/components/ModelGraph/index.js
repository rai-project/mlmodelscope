import React from "react";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";

import Cytoscape from "./Cytoscape";

// color map
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

export default connect(
  {
    modelGraph: state`models.model.graph`
  },
  function ModelGraph({ modelGraph }) {
    // ES6
    const flatten = list =>
      list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

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

    let nodes = [];
    let edges = [];
    let hidden = {};

    if (modelGraph) {
      const nodeList = modelGraph.nodesList;
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
          return nd.inputsList.map(item => {
            const inputNode = nodeList[item.nodeId];
            const inputName = inputNode.name;
            if (hidden[inputName]) {
              return [];
            }
            return { data: { source: inputName, target: name } };
          });
        })
      );
      console.log({ nodes });
    }

    return (
      <div style={cyStyle}>
        <Cytoscape containerStyle={cyStyle} elements={{ nodes, edges }} />
      </div>
    );
  }
);
