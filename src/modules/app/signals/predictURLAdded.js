import { push, when, set } from "cerebral/operators";
import { state } from "cerebral/tags";

export default [
  when(state`app.predictURL`, predictURL => predictURL === ""),
  {
    false: [push(state`app.predictInputs`, state`app.predictURL`)],
    true: [
      set(
        state`app.predictURL`,
        "http://ww4.hdnux.com/photos/41/15/35/8705883/4/920x920.jpg"
      )
    ]
  }
];
