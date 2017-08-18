import { compute } from "cerebral";
import { set, when, shift } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import { head } from "lodash";

import modelPredictChain from "../../common/chains/modelPredictChain";
import resetError from "../../common/chains/resetError";

export default [
  ...resetError,
  set(state`models.selectedModels`, props`model`),
  ...modelPredictChain,
  when(state`app.error`, err => err !== null),
  {
    false: [
      set(state`app.currentPage`, "PredictionResults"),
      set(
        state`app.name`,
        compute(props`model`, model => model.name + " Model Inference")
      ),
    ],
    true: [], // nothing
  },
];
