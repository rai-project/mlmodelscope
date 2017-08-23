import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import onError from "./onError";
import { predict } from "../operators";

export default [
  when(
    state`app.isPredicting`,
    state`app.predictInputs`,
    state`models.selectedModels`,
    (isPredicting, inputs, models) =>
      isPredicting !== true &&
      inputs.length !== 0 &&
      (models !== undefined || models.length !== 0)
  ),
  {
    true: [
      set(state`app.isPredicting`, true),
      predict({
        inputs: state`app.predictInputs`,
        models: state`models.selectedModels`
      }),
      {
        success: [set(state`app.predictOutputs`, props`output`)],
        error: onError
      },
      set(state`app.isPredicting`, false)
    ],
    false: []
  }
];
