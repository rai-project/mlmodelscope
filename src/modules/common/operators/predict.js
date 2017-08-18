import { isArray } from "lodash";
import base64 from "../compute/base64";
import outerProduct from "../../../helpers/outerproduct";
import { Predict } from "../../../swagger/dlframework";

export default function predict({ data, models }) {
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
