import { push, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

export default [
  when(state`app.predictURL`, predictURL => predictURL === ""),
  {
    false: [push(state`app.predictInputs`, state`app.predictURL`)],
    true: [] // nothing
  }
];
