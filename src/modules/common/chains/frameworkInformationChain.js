import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import onError from "./onError";
import { FrameworkManifests } from "../../../swagger/dlframework";

export default [
  when(
    state`app.isLoadingFrameworkManifests`,
    state`app.frameworks.data`,
    (isLoading, frameworks) =>
      isLoading !== true &&
      (frameworks === undefined || frameworks.length === 0)
  ),
  {
    true: [
      set(state`app.isLoadingFrameworkManifests`, true),
      FrameworkManifests({
        frameworkName: "*",
        frameworkVersion: "*"
      }),
      {
        success: [set(state`app.frameworks.data`, props`result.manifests`)],
        error: onError
      },
      set(state`app.isLoadingFrameworkManifests`, false)
    ],
    false: []
  }
];
