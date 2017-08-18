import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import base64 from "../compute/base64";
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
          model_version: props`model.version`,
          data: base64(state`app.predictURL`),
          limit: 10,
        },
      }),
      {
        success: [set(state`app.features`, props`result.features`)],
        error: onError,
      },
      set(state`app.isPredicting`, false),
    ],
    false: [],
  },
];
