import { redirect } from "@cerebral/router/operators";
import { set, equals } from "cerebral/operators";
import { state, props, string } from "cerebral/tags";

import populateModelData from "../actions/populateModelData";

export default [
  set(state`models.currentModel`, props`name`),
  populateModelData
];
