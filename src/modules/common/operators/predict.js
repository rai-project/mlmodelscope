import { isArray } from "lodash";
// import base64 from "../compute/base64";
// import outerProduct from "../../../helpers/outerproduct";
import { Open, URLs, Close } from "../../../swagger/dlframework";

export default function predictAll({ inputs, models }) {
  let _predict = function({ http, path, resolve }) {
    let resolvedInputs = resolve.value(inputs);
    if (!isArray(resolvedInputs)) {
      resolvedInputs = [resolvedInputs];
    }
    let resolvedModels = resolve.value(models);
    if (!isArray(resolvedModels)) {
      resolvedModels = [resolvedModels];
    }

    let successes = [];
    let errors = [];

    const close = ({ model, urls, predictor }) => {
      return Close({
        body: {
          id: predictor
        }
      })({
        http,
        resolve,
        path: {
          success() {},
          error({ error }) {
            errors.push({
              model,
              urls,
              error
            });
          }
        }
      });
    };

    const predictURLs = ({ model, predictor, urls }) => {
      return URLs({
        body: {
          id: predictor,
          data: urls
        }
      })({
        http,
        resolve,
        path: {
          success({ result }) {
            console.log({ result });
            successes.push({
              model,
              urls,
              features: result.features
            });
            close({
              model,
              urls,
              predictor
            });
          },
          error({ error }) {
            close({
              model,
              urls,
              predictor
            });
            errors.push({
              model,
              urls,
              error
            });
          }
        }
      });
    };

    const open = ({ model, urls }) => {
      return Open({
        body: {
          framework_name: model.framework.name,
          framework_version: model.framework.version,
          model_name: model.name,
          model_version: model.version
        }
      })({
        http,
        resolve,
        path: {
          success({ result }) {
            debugger;
            predictURLs({
              model,
              urls,
              predictor: result.id
            });
          },
          error({ error }) {
            errors.push({
              model,
              urls,
              error
            });
          }
        }
      });
    };

    // return Promise.all(

    //   resolvedModels.map(([model]) => {
    //   }
    // )
    return Promise.all(
      resolvedModels.map(model => open({ model, urls: resolvedInputs }))
    )
      .then(function() {
        if (errors.length !== 0) {
          return path.errors(errors);
        }
        return path.success({ output: successes });
      })
      .catch(function() {
        return path.error({ error: errors });
      });
  };
  _predict.displayName = "predict";
  return _predict;
}
