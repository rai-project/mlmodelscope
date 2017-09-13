import { isArray, isNil } from "lodash";
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
import pFinally from "p-finally";
import pIf from "p-if";

// eslint-disable-next-line
import pLog from "p-log";

const debugging = true;

function randomTraceId() {
  const digits = "0123456789abcdef";
  let n = "";
  for (let i = 0; i < 16; i++) {
    const rand = Math.floor(Math.random() * 16);
    n += digits[rand];
  }
  return n;
}

export default function predict({ inputs, models, requestType = "url" }) {
  let _predict = function({ http, path, resolve }) {
    let resolvedInputs = resolve.value(inputs);
    if (!isArray(resolvedInputs)) {
      resolvedInputs = [resolvedInputs];
    }
    let resolvedModels = resolve.value(models);
    if (!isArray(resolvedModels)) {
      resolvedModels = [resolvedModels];
    }

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

    const openAPI = function() {
      return Open(...arguments)({ http, resolve });
    };
    const closeAPI = function() {
      return Close(...arguments)({ http, resolve });
    };
    const urlAPI = function() {
      return URLs(...arguments)({ http, resolve });
    };
    // eslint-disable-next-line
    const imagesAPI = function() {
      return Images(...arguments)({ http, resolve });
    };
    // eslint-disable-next-line
    const datasetAPI = function() {
      return Dataset(...arguments)({ http, resolve });
    };

    const run = ({ model, data }) => {
      let predictor;
      const requestId = randomTraceId();
      const traceId = requestId;
      const spanId = randomTraceId();
      const res = pFinally(
        openAPI({
          requestId,
          headers: {
            traceid: traceId,
            "trace.traceid": traceId,
            "x-b3-traceid": traceId
          },
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
          .catch(({ error }) => {
            throw error;
          })
          .then(
            pIf(requestType === "url", ({ predictor }) => {
              return urlAPI({
                requestId,
                headers: {
                  traceid: traceId,
                  "trace.traceid": traceId,
                  "x-b3-traceid": traceId,
                  spanid: spanId,
                  "trace.spanid": spanId,
                  "x-b3-spanid": spanId
                },
                body: {
                  predictor,
                  urls: data.map(e => {
                    return { id: yeast(), data: e };
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
            pIf(requestType === "image", ({ predictor }) => {
              return imagesAPI({
                requestId,
                headers: {
                  traceid: traceId,
                  "trace.traceid": traceId,
                  "x-b3-traceid": traceId,
                  spanid: spanId,
                  "trace.spanid": spanId,
                  "x-b3-spanid": spanId
                },
                body: {
                  predictor,
                  images: data.map(e => {
                    return { id: yeast(), data: e };
                  }),
                  options: {
                    request_id: requestId,
                    feature_limit: 0
                  }
                }
              });
            })
          )
          .then(pIf(debugging === true, pLog()))
          .then(({ response: { result } }) => {
            return { response: result.responses };
          })
          .then(({ response }) => {
            let features = [];
            for (let ii = 0; ii < data.length; ii++) {
              const featureData = response[ii];
              features.push({
                model,
                predictor,
                requestType: requestType,
                data: data[ii],
                ...featureData
              });
            }
            return features;
          })
          .catch(function({ error }) {
            throw error;
          }),
        function() {
          if (isNil(predictor)) {
            return;
          }
          closeAPI({
            requestId,
            headers: {
              "trace.traceid": requestId,
              "trace.spanId": spanId
            },
            body: { id: predictor.id }
          });
        }
      );

      return res;
    };

    return Promise.all(
      resolvedModels.map(model => run({ model, data: resolvedInputs }))
    )
      .then(function(features) {
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
