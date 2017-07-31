import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import onError from "./onError";
import { Predict } from "../../../swagger/dlframework";

export default [
  when(
    state`app.isPredicting`,
    props`model`,
    (isPredicting, model) =>
      isPredicting !== true && (model !== undefined || model.length !== 0)
  ),
  {
    true: [
      set(state`app.isPredicting`, true),
      Predict({
        body: {
          framework_name: props`model.framework.name`,
          framework_version: props`model.framework.version`,
          model_name: props`model.name`,
          model_version: props`model.version`
        }
      }),
      {
        success: [set(state`models.data`, props`result.manifests`)],
        error: onError
      },
      set(state`app.isPredicting`, false)
    ],
    false: []
  }
];
