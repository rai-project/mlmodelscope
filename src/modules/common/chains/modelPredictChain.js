import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import { head } from "lodash";
import base64 from "../compute/base64";
import onError from "./onError";
import { Predict } from "../../../swagger/dlframework";

function a({ props }) {
  console.log(arguments);
  let model = head(props.selectedModels);
  return Predict({
    body: {
      framework_name: model.framework.name,
      framework_version: model.framework.version,
      model_name: model.name,
      model_version: model.version,
      data: base64(state`app.predictURL`),
      limit: 10,
    },
  });
}

export default [
  when(
    state`app.isPredicting`,
    props`selectedModels`,
    (isPredicting, models) =>
      isPredicting !== true && (models !== undefined || models.length !== 0)
  ),
  {
    true: [
      set(state`app.isPredicting`, true),
      a,
      // {
      //   success: [set(state`app.features`, props`result.features`)],
      //   error: onError,
      // },
      set(state`app.isPredicting`, false),
    ],
    false: [],
  },
];
