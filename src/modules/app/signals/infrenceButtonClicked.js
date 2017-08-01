import { compute } from "cerebral";
import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import modelPredictChain from "../../common/chains/modelPredictChain";
import resetError from "../../common/chains/resetError";

export default [
  ...resetError,
  set(state`models.currentModel`, props`model`),
  ...modelPredictChain,
  when(state`app.isError`),
  {
    false: [
      set(state`app.currentPage`, "InferenceResults"),
      set(
        state`app.name`,
        compute(
          state`models.currentModel`,
          val => val.name + " Model Inference"
        )
      )
    ],
    true: [] // nothing
  }
];
