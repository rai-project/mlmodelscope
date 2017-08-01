import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import populateModelData from "../actions/populateModelData";
import resetError from "../../common/chains/resetError";

export default [
  ...resetError,
  set(state`models.currentModel`, props`manifest`),
  populateModelData
];
