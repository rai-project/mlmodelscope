import { isArray, isNil, concat } from "lodash";
import yeast from "yeast";
import {
  Open,
  URLs,
  Images,
  Dataset,
  Close
} from "../../../swagger/dlframework";
import HTTPError from "../errors/http";
import uuid from "uuid/v4";

export default function predict({ inputs, models, method = "url" }) {
  let _predict = function({ http, path, resolve }) {
    let resolvedInputs = resolve.value(inputs);
    if (!isArray(resolvedInputs)) {
      resolvedInputs = [resolvedInputs];
    }
    let resolvedModels = resolve.value(models);
    if (!isArray(resolvedModels)) {
      resolvedModels = [resolvedModels];
    }

    method = method.toLowerCase();
    if (method !== "url" && method !== "image" && method !== "dataset") {
      throw new Error(
        "valid methods are url, images, or dataset not " + method
      );
    }

    const openAPI = function() {
      return Open(...arguments)({ http, resolve });
    };
    const closeAPI = function() {
      return Close(...arguments)({ http, resolve });
    };
    const urlAPI = function() {
      return URLs(...arguments)({ http, resolve });
    };
    const imagesAPI = function() {
      return Images(...arguments)({ http, resolve });
    };
    const datasetAPI = function() {
      return Dataset(...arguments)({ http, resolve });
    };

    const open = ({ model, urls }) => {
      let predictor;
      const requestId = uuid();
      const res = openAPI({
        requestId,
        body: {
          framework_name: model.framework.name,
          framework_version: model.framework.version,
          model_name: model.name,
          model_version: model.version
        }
      })
        .then(function({ response: { result } }) {
          predictor = result;
          return { predictor };
        })
        .then(function({ predictor }) {
          return urlAPI({
            requestId,
            body: {
              predictor,
              urls: urls.map(url => {
                return { id: yeast(), data: url };
              }),
              options: {
                request_id: requestId,
                feature_limit: 0
              }
            }
          });
        })
        .then(function({ response: { result } }) {
          return { response: result.responses };
        })
        .then(function({ response }) {
          let features = [];
          for (let ii = 0; ii < urls.length; ii++) {
            const featureData = response[ii];
            features.push({
              model,
              predictor,
              url: urls[ii],
              ...featureData
            });
          }
          return { features };
        })
        .then(function({ features }) {
          if (!isNil(predictor)) {
            closeAPI({
              requestId,
              body: { id: predictor.id }
            });
          }
          return features;
        })
        .catch(function({ error }) {
          if (!isNil(predictor)) {
            closeAPI({
              requestId,
              body: { id: predictor.id }
            });
          }
          throw error;
        });

      return res;
    };

    return Promise.all(
      resolvedModels.map(model => open({ model, urls: resolvedInputs }))
    )
      .then(function(allFeatures) {
        const features = concat(allFeatures);
        return path.success({ output: features });
      })
      .catch(function(errors) {
        return path.error({
          error: new HTTPError("failed to predict", 400, errors, "predict")
        });
      });
  };
  _predict.displayName = "predict";
  return _predict;
}
