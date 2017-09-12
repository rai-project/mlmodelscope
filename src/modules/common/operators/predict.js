import { isArray } from "lodash";
import yeast from "yeast";
import { Open, URLs, Close } from "../../../swagger/dlframework";
import HTTPError from "../errors/http";

export default function predict({ inputs, models }) {
  let _predict = function({ http, path, resolve }) {
    let resolvedInputs = resolve.value(inputs);
    if (!isArray(resolvedInputs)) {
      resolvedInputs = [resolvedInputs];
    }
    let resolvedModels = resolve.value(models);
    if (!isArray(resolvedModels)) {
      resolvedModels = [resolvedModels];
    }

    var successes = new Array();
    var errors = new Array();

    var close = ({ model, urls, predictor }) => {
      return Close({
        body: {
          predictor
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

    // let close = ({ model, urls, predictor }) => {};

    var predictURLs = ({ model, predictor, urls }) => {
      return URLs({
        body: {
          predictor,
          urls: urls.map(url => {
            return { id: yeast(), data: url };
          }),
          options: {
            request_id: "",
            feature_limit: 0
          }
        }
      })({
        http,
        resolve,
        path: {
          success({ result }) {
            console.log({ successes });
            for (let ii = 0; ii < urls.length; ii++) {
              const rest = result.responses[ii];
              const data = {
                model,
                url: urls[ii],
                ...rest
              };
              console.log({ data });
              successes.push(data);
            }

            console.log({ path: "", successes });
            // successes.push({
            //   model,
            //   urls,
            //   features: result.responses,
            // });
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

    var open = ({ model, urls }) => {
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
          success({ response: { result } }) {
            predictURLs({
              model,
              urls,
              predictor: result
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

    return Promise.all(
      resolvedModels.map(model => open({ model, urls: resolvedInputs }))
    )
      .then(function() {
        console.log({ args: arguments });
        if (errors.length !== 0) {
          return path.errors(errors);
        }
        console.log({ successes });

        return path.success({ output: successes });
      })
      .catch(function() {
        return path.error({
          error: new HTTPError("failed to predict", 400, errors, "predict")
        });
      });
  };
  _predict.displayName = "predict";
  return _predict;
}
