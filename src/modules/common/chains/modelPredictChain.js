import { parallel } from "cerebral";
import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import { head } from "lodash";
import base64 from "../compute/base64";
import onError from "./onError";
import { Predict } from "../../../swagger/dlframework";

function predict(predictURL, selectedModels) {
  return ({ http, path, resolve }) => {
    const models = resolve.value(selectedModels);
    const url = resolve.value(predictURL);
    let successes = [];
    let errors = [];
    const predictPath = {
      success: function({ result }) {
        successes.push(result.features);
      },
      error: function({ error }) {
        errors.push(error);
      }
    };
    return Promise.all(
      models.map(model => {
        return Predict({
          body: {
            framework_name: model.framework.name,
            framework_version: model.framework.version,
            model_name: model.name,
            model_version: model.version,
            data: base64(url),
            limit: 10
          }
        })({
          http,
          path: predictPath,
          resolve
        });
      })
    )
      .then(() => path.success({ features: successes }))
      .catch(() => path.error(errors));
  };
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
      predict(state`app.predictURL`, props`selectedModels`),
      {
        success: [set(state`app.features`, props`features`)],
        error: onError
      },
      set(state`app.isPredicting`, false)
    ],
    false: []
  }
];
