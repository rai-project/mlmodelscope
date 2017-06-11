import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import populateModelData from "../actions/populateModelData";

export default [
  set(state`models.currentModel`, props`name`),
  populateModelData
];
