import { set, debounce } from "cerebral/operators";
import { state, props } from "cerebral/tags";

export default [
  debounce(200),
  {
    continue: [set(state`app.error`, props`error`)],
    discard: []
  }
];
