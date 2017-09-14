import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import onError from "./onError";
import { FrameworkManifests } from "../../../swagger/dlframework";

export default [
  when(
    state`app.status.isLoadingFrameworkManifests`,
    state`app.frameworks.data`,
    (isLoading, frameworks) =>
      isLoading !== true &&
      (frameworks === undefined || frameworks.length === 0)
  ),
  {
    true: [
      set(state`app.status.isLoadingFrameworkManifests`, true),
      FrameworkManifests({
        frameworkName: "*",
        frameworkVersion: "*"
      }),
      {
        success: [
          set(state`app.frameworks.data`, props`response.result.manifests`)
        ],
        error: onError
      },
      set(state`app.status.isLoadingFrameworkManifests`, false)
    ],
    false: []
  }
];
