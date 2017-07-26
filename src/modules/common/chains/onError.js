import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

export default [
  set(state`app.isError`, true),
  set(state`app.error`, props`error`)
];
