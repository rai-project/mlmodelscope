import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

import HTTPError from "../../common/errors/http";
import { GetFrameworkManifest } from "../../../swagger/dlframework";
// import getFrameworkManifests from "../actions/getFrameworkManifests";

export default [
  set(state`app.currentPage`, "getFrameworkManifests"),
  set(state`app.name`, "CarML getFrameworkManifests"),
  GetFrameworkManifest({
    frameworkName: "Tensorflow",
    frameworkVersion: "1.1"
  }),
  {
    success: [],
    error: [set(state`app.name`, "Error")],
    abort: [], // Optional
    500: [set(state`app.name`, "Error")],
    "${STATUS_CODE}": [set(state`app.name`, "Error")] // Optionally any status code, ex. 404: []
  }
];
