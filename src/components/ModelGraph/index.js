import React from "react";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";

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

export default connect(
  {},
  class ModelGraph extends React.Component {
    render() {
      return <div />;
    }
  }
);
