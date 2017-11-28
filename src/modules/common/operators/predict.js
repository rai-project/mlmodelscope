import { isArray, isNil, has } from "lodash";
import yeast from "yeast";
import {
  Open,
  URLs,
  Images,
  Dataset,
  Close
} from "../../../swagger/dlframework";

import uuid from "uuid/v4";
import pIf from "../../../helpers/p-if";
import pFinally from "../../../helpers/p-finally";
import pLog from "../../../helpers/p-log";

const debugging = false;

// function randomId() {
//   const digits = "0123456789abcdef";
//   let n = "";
//   for (let i = 0; i < 16; i++) {
//     const rand = Math.floor(Math.random() * 16);
//     n += digits[rand];
//   }
//   return n;
// }

function spanHeaders(headers) {
  let res = {};
  headers = headers || {};
  if (has(headers, "x-b3-flags")) {
    res["x-b3-flags"] = headers["x-b3-flags"];
  }
  if (has(headers, "x-b3-sampled")) {
    res["x-b3-sampled"] = headers["x-b3-sampled"];
  }
  if (has(headers, "x-b3-spanid")) {
    res["x-b3-spanid"] = headers["x-b3-spanid"];
  }
  if (has(headers, "x-b3-traceid")) {
    res["x-b3-traceid"] = headers["x-b3-traceid"];
  }
  return res;
}

export default function predict({
  inputs,
  models,
  device,
  batchSize,
  traceLevel,
  requestType = "url"
}) {
  let _predict = function({ http, path, resolve }) {
    let resolvedInputs = resolve.value(inputs);
    if (!isArray(resolvedInputs)) {
      resolvedInputs = [resolvedInputs];
    }
    let resolvedModels = resolve.value(models);
    if (!isArray(resolvedModels)) {
      resolvedModels = [resolvedModels];
    }
    let resolvedDevice = resolve.value(device);
    let resolvedBatchSize = resolve.value(batchSize);
    let resolvedTraceLevel = resolve.value(traceLevel);

    requestType = requestType.toLowerCase();
    if (
      requestType !== "url" &&
      requestType !== "image" &&
      requestType !== "dataset"
    ) {
      return path.error({
        error: new Error(
          "valid request types are url, images, or dataset not " + requestType
        )
      });
    }

    // eslint-disable-next-line
    const openAPI = (...args) =>
      Open(...args)({
        http,
        resolve
      });

    // eslint-disable-next-line
    const closeAPI = (...args) =>
      Close(...args)({
        http,
        resolve
      });

    // eslint-disable-next-line
    const urlAPI = (...args) =>
      URLs(...args)({
        http,
        resolve
      });

    // eslint-disable-next-line
    const imagesAPI = (...args) =>
      Images(...args)({
        http,
        resolve
      });

    // eslint-disable-next-line
    const datasetAPI = (...args) =>
      Dataset(...args)({
        http,
        resolve
      });

    const run = ({ model, data, device, batchSize, traceLevel }) => {
      let predictor;
      const requestId = uuid();
      const res = pFinally(
        openAPI({
          requestId,
          body: {
            framework_name: model.framework.name,
            framework_version: model.framework.version,
            model_name: model.name,
            model_version: model.version,
            options: {
              batch_size: Number(batchSize),
              execution_options: {
                trace_level: traceLevel,
                device_count: { [device]: 0 }
              }
            }
          }
        })
          .catch(function(error) {
            throw error;
          })
          .then(
            pIf(requestType === "url", function({
              response: { result, headers }
            }) {
              predictor = result;
              return urlAPI({
                requestId,
                headers: {
                  ...spanHeaders(headers)
                },
                body: {
                  predictor,
                  urls: data.map(e => {
                    return {
                      id: yeast(),
                      data: e
                    };
                  }),
                  options: {
                    request_id: requestId,
                    feature_limit: 0
                  }
                }
              });
            })
          )
          .then(
            pIf(requestType === "image", function({
              response: { result, headers }
            }) {
              predictor = result;
              return imagesAPI({
                requestId,
                headers: {
                  ...spanHeaders(headers)
                },
                body: {
                  predictor,
                  images: data.map(e => {
                    return {
                      id: yeast(),
                      data: e
                    };
                  }),
                  options: {
                    request_id: requestId,
                    feature_limit: 0
                  }
                }
              });
            })
          )
          .then(pIf(debugging, pLog()))
          .then(function({ response: { result } }) {
            let features = [];
            for (let ii = 0; ii < data.length; ii++) {
              const featureData = result.responses[ii];
              features.push({
                model,
                predictor,
                requestType: requestType,
                data: data[ii],
                ...featureData
              });
            }
            return features;
          }),
        function() {
          if (isNil(predictor)) {
            return;
          }
          closeAPI({
            requestId,
            body: {
              id: predictor.id
            }
          }).catch(function(e) {});
        }
      );

      return res;
    };

    return Promise.all(
      resolvedModels.map(model =>
        run({
          model,
          data: resolvedInputs,
          device: resolvedDevice,
          batchSize: resolvedBatchSize,
          traceLevel: resolvedTraceLevel
        })
      )
    )
      .then(function(features) {
        return path.success({
          output: features
        });
      })
      .catch(function(error) {
        return path.error({
          error: error.toJSON()
        });
      });
  };
  _predict.displayName = "predict";
  return _predict;
}
