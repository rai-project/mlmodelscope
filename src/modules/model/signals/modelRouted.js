import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

export default [
  set(state`app.currentPage`, "ModelInformation"),
  set(state`models.currentModel`, props`name`)
];
