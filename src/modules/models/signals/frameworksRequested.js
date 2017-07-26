import { set } from "cerebral/operators";
import { state, output, props, input } from "cerebral/tags";

import onError from "../../common/chains/onError";
import HTTPError from "../../common/errors/http";
import { GetFrameworkManifests } from "../../../swagger/dlframework";
import { GetFrameworkManifest } from "../../../swagger/dlframework";
import { GetFrameworkModelManifest } from "../../../swagger/dlframework";
import { GetFrameworkModels } from "../../../swagger/dlframework";
// import getFrameworkManifests from "../actions/getFrameworkManifests";

export default [
  set(state`app.currentPage`, "getFrameworkManifests"),
  set(state`app.name`, "CarML getFrameworkManifests"),
  // GetFrameworkManifests(),
  // {
  //   success: [set(state`app.frameworks`, props`result.manifests`)],
  //   error: onError
  // }
  GetFrameworkModels({
    frameworkName: "Tensorflow",
    frameworkVersion: "1.1"
  }),
  {
    success: [set(state`models.data`, props`result.manifests`)],
    error: onError
  }
  // GetFrameworkModelManifest({
  //   frameworkName: "Tensorflow",
  //   modelName: "inception",
  // frameworkVersion: "1.1",
  // modelVersion: "3.0"
  // }),
  // {
  //   success: [set(state`app.currentModel`, props`result`)],
  //   error: onError
  // }
];
