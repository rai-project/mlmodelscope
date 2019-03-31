import yeast from "yeast";
import uuid from "uuid/v4";
import { Open, URLs, Close } from "../swagger/index";

function buildDeviceCount(useGPU) {
  if (useGPU) {
    return {
      GPU: 0,
    };
  } else {
    return {
      CPU: 0,
    };
  }
}

function buildOpenParams({
  requestId,
  model,
  batch_size,
  trace_level,
  useGPU,
}) {
  return {
    requestId,
    body: {
      framework_name: model.framework.name,
      framework_version: model.framework.version,
      model_name: model.name,
      model_version: model.version,
      options: {
        batch_size: batch_size,
        execution_options: {
          trace_level: trace_level,
          device_count: buildDeviceCount(useGPU),
        },
      },
    },
  };
}

function pFinally(promise, onFinally) {
  onFinally = onFinally || (() => {});

  return promise.then(
    val => Promise.resolve(onFinally()).then(() => val),
    err =>
      Promise.resolve(onFinally()).then(() => {
        throw err;
      })
  );
}

export default function predict(
  imageUrls,
  models,
  batch_size,
  trace_level,
  useGPU
) {
  let spanHeaders = {};

  const run = (imageUrls, model) => {
    let predictor = null;
    const requestId = uuid();
    let openParams = buildOpenParams({
      requestId,
      model,
      batch_size,
      trace_level,
      useGPU,
    });
    console.log(openParams);

    const res = pFinally(
      Open(openParams)
        .catch(error => {
          throw error;
        })
        .then(response => {
          console.log("URLs", { response });
          console.log({ urls: imageUrls });
          predictor = response;
          spanHeaders = predictor.headers;
          return URLs({
            requestId,
            headers: spanHeaders,
            body: {
              predictor: {
                id: predictor.id,
                trace_id: {
                  id: spanHeaders["x-b3-traceid"],
                },
              },
              urls: imageUrls.map(url => {
                return {
                  id: yeast(),
                  data: url,
                };
              }),
              options: {
                request_id: requestId,
                feature_limit: 0,
              },
            },
          });
        })
        .then(response => {
          return {
            model: model,
            framework: model.framework,
            traceId: spanHeaders["x-b3-traceid"],
            response: response.responses,
          };
        }),
      function() {
        if (predictor && predictor.id) {
          Close({
            requestId,
            headers: spanHeaders,
            body: {
              predictor: {
                id: predictor.id,
              },
            },
          }).catch(function(e) {});
          predictor = null;
        }
      }
    );
    return res;
  };
  // let pairs = [];
  // models.map(model =>
  //   frameworks.map(framework => pairs.push({ model: model, framework: framework }))
  // );
  return Promise.all(models.map(model => run(imageUrls, model))).then(
    function(features) {
      console.log(features);
      // window.last_features = features;
      return features;
    }
  );
}
