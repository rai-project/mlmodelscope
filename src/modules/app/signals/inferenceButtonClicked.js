import { when } from "cerebral/operators";
import { state } from "cerebral/tags";

import modelPredictChain from "../../common/chains/modelPredictChain";
import resetError from "../../common/chains/resetError";

export default [
  ...resetError,
  ...modelPredictChain,
  when(state`app.error`),
  {
    false: [
      // set(state`app.currentPage`, "PredictionResults"),
      // set(state`app.name`, "CarML Inference")
    ],
    true: [] // nothing
  }
];
