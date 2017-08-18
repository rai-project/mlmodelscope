import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import base64 from "../compute/base64";
import onError from "./onError";
import { Predict } from "../../../swagger/dlframework";
import { isArray } from "lodash";
import outerProduct from "../../../helpers/outerproduct";

function predict({ data, models }) {
  function _predict({ http, path, resolve }) {
    models = resolve.value(models);
    if (!isArray(models)) {
      models = [models];
    }
    data = resolve.value(data);
    if (!isArray(data)) {
      data = [data];
    }

    let successes = [];
    let errors = [];
    const predictPath = ({ model, data }) => {
      return {
        success({ result }) {
          successes.push({
            model,
            data,
            features: result.features
          });
        },
        error({ error }) {
          errors.push({
            model,
            data,
            error
          });
        }
      };
    };

    return Promise.all(
      outerProduct([models, data]).map(([model, data]) => {
        return Predict({
          body: {
            framework_name: model.framework.name,
            framework_version: model.framework.version,
            model_name: model.name,
            model_version: model.version,
            data: base64(data),
            limit: 10
          }
        })({
          http,
          path: predictPath({ model, data }),
          resolve
        });
      })
    )
      .then(() => path.success({ features: successes }))
      .catch(() => path.error(errors));
  }
  _predict.displayName = "predict";
  return _predict;
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
      predict({ data: state`app.predictURL`, models: props`selectedModels` }),
      {
        success: [set(state`app.features`, props`features`)],
        error: onError
      },
      set(state`app.isPredicting`, false)
    ],
    false: []
  }
];
