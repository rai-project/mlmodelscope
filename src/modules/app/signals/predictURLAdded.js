import { push, when, set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

export default [
  when(state`app.predictURL`, predictURL => predictURL === ""),
  {
    false: [push(state`app.predictInputs`, state`app.predictURL`)],
    true: [
      set(
        state`app.predictURL`,
        "https://static.pexels.com/photos/20787/pexels-photo.jpg"
      )
    ]
  }
];
