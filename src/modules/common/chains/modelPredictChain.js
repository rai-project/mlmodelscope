import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import onError from "./onError";
import { predict } from "../operators";

export default [
  when(
    state`app.status.isPredicting`,
    state`app.predictInputs`,
    state`models.selectedModels`,
    state`app.device`,
    (isPredicting, inputs, models, device) =>
      isPredicting !== true &&
      inputs.length !== 0 &&
      (models !== undefined || models.length !== 0)
  ),
  {
    true: [
      set(state`app.status.isPredicting`, true),
      predict({
        inputs: state`app.predictInputs`,
        models: state`models.selectedModels`,
        device: state`app.device`,
        batchSize: state`app.batchSize`,
        traceLevel: state`app.traceLevel`
      }),
      {
        success: [set(state`app.predictOutputs`, props`output`)],
        error: onError
      },
      set(state`app.status.isPredicting`, false)
    ],
    false: []
  }
];
