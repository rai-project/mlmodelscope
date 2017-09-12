import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import onError from "./onError";
import { ModelManifests } from "../../../swagger/dlframework";

export default [
  when(
    state`app.isLoadingModelManifests`,
    state`models.data`,
    (isLoading, models) =>
      isLoading !== true && (models === undefined || models.length === 0)
  ),
  {
    true: [
      set(state`app.isLoadingModelManifests`, true),
      ModelManifests({
        frameworkName: "*",
        frameworkVersion: "*",
        modelName: "*",
        modelVersion: "*"
      }),
      {
        success: [set(state`models.data`, props`response.result.manifests`)],
        error: onError
      },
      set(state`app.isLoadingModelManifests`, false)
    ],
    false: []
  }
];
