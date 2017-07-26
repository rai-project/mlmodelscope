import { set } from "cerebral/operators";
import { state, output, props, input } from "cerebral/tags";

import onError from "../../common/chains/onError";
import HTTPError from "../../common/errors/http";
import { GetFrameworkManifests } from "../../../swagger/dlframework";
import { GetFrameworkManifest } from "../../../swagger/dlframework";
import { GetFrameworkModelManifest } from "../../../swagger/dlframework";
// import getFrameworkManifests from "../actions/getFrameworkManifests";

export default [
  set(state`app.currentPage`, "getFrameworkManifests"),
  set(state`app.name`, "CarML getFrameworkManifests"),
  // GetFrameworkManifests(),
  // {
  //   success: [set(state`app.frameworks`, props`result.manifests`)],
  //   error: onError,
  // },
  // GetFrameworkManifest({
  //   frameworkName: "MXNet",
  //   frameworkVersion: "0.1",
  // }),
  // {
  //   success: [set(state`app.currentFramework`, props`result`)],
  //   error: onError,
  // },
  GetFrameworkModelManifest({
    frameworkName: "Tensorflow",
    modelName: "inception",
    body: {
      framework_version: "1.1",
      model_version: "3.0"
    }
  }),
  {
    success: [set(state`app.currentModel`, props`result`)],
    error: onError
  }
];
