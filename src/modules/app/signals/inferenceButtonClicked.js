import { compute } from "cerebral";
import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import modelPredictChain from "../../common/chains/modelPredictChain";
import resetError from "../../common/chains/resetError";

export default [
  ...resetError,
  // set(state`models.selectedModels`, props`selectedModels`),
  ...modelPredictChain,
  when(state`app.error`),
  {
    false: [
      set(state`app.currentPage`, "PredictionResults"),
      set(
        state`app.name`,
        compute(props`model`, model => model.name + " Model Inference")
      )
    ],
    true: [] // nothing
  }
];
