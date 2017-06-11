import { compute } from "cerebral";
import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import modelInferChain from "../../common/chains/modelInferChain";
import resetError from "../../common/chains/resetError";

export default [
  ...resetError,
  set(state`app.isInferring`, true),
  set(state`models.currentModel`, props`model`),
  ...modelInferChain,
  set(state`app.isInferring`, false),
  when(state`app.isError`),
  {
    false: [
      set(state`app.currentPage`, "InferenceResults"),
      set(
        state`app.name`,
        compute(state`models.currentModel`, val => val + " Model Inference")
      )
    ],
    true: [] // nothing
  }
];
