import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import modelInferChain from "../../common/chains/modelInferChain";

export default [
  set(state`app.isInferring`, true),
  set(state`models.currentModel`, props`model`),
  set(state`app.inferenceURL`, props`url`),
  ...modelInferChain,
  set(state`app.isInferring`, false)
];
