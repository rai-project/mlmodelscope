import React from "react";
import { RadialChart } from "react-vis";

import { values, sum } from "lodash";

// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style-loader!css-loader!./../../../node_modules/react-vis/dist/style.css";

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

  let layers = {};

  graph.nodesList.map(nd => {
    if (nd.op === "null" || isLikeWeight(nd.name)) {
      return null;
    }
    layers[nd.op] = layers[nd.op] ? layers[nd.op] + 1 : 1;
    return null;
  });

  const total = sum(values(layers));

  const computeAngle = function(val) {
    return 360 * val / total;
  };

  let ii = 0;
  let data = [];
  for (const key in layers) {
    const color = fillcolors[key] || fillcolors["any"];
    data.push({
      angle: computeAngle(layers[key]),
      id: ii++,
      label: key,
      color
    });
  }

  return (
    <div>
      <RadialChart
        showLabels
        animation
        colorType={"literal"}
        colorDomain={[0, 100]}
        colorRange={[0, 10]}
        margin={{ top: 100 }}
        data={data}
        width={400}
        height={300}
      />
    </div>
  );
}
