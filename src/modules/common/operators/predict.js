import { isArray } from "lodash";
import base64 from "../compute/base64";
import outerProduct from "../../../helpers/outerproduct";
import { Predict } from "../../../swagger/dlframework";

export default function predict({ inputs, models }) {
  let _predict = function({ http, path, resolve }) {
    inputs = resolve.value(inputs);
    if (!isArray(inputs)) {
      inputs = [inputs];
    }
    models = resolve.value(models);
    if (!isArray(models)) {
      models = [models];
    }

    let successes = [];
    let errors = [];

    return Promise.all(
      outerProduct([models, inputs]).map(([model, input]) => {
        return Predict({
          body: {
            framework_name: model.framework.name,
            framework_version: model.framework.version,
            model_name: model.name,
            model_version: model.version,
            data: base64(input),
            limit: 10
          }
        })({
          http,
          resolve,
          path: {
            success({ result }) {
              successes.push({
                model,
                input,
                features: result.features
              });
            },
            error({ error }) {
              errors.push({
                model,
                input,
                error
              });
            }
          }
        });
      })
    )
      .then(function() {
        if (errors.length !== 0) {
          return path.errors(errors);
        }
        return path.success({ output: successes });
      })
      .catch(function() {
        return path.error(errors);
      });
  };
  _predict.displayName = "predict";
  return _predict;
}
