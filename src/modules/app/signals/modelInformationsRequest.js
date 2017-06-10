import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

import getModelInformations from "../actions/getModelInformations";
import getInferenceResults from "../../model/actions/getInferenceResults";

export default [
  set(state`app.isBusy`, true),
  getModelInformations,
  {
    success: [],
    error: set(state`app.isError`, true)
  },
  getInferenceResults,
  {
    success: [],
    error: set(state`app.isError`, true)
  },
  set(state`app.isBusy`, false)
];
