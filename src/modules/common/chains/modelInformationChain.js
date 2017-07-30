import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import onError from "./onError";
import { GetModelManifests } from "../../../swagger/dlframework";

export default [
  when(state`models.data`, value => value.length === 0),
  {
    true: [
      when(state`app.isLoadingModels`),
      {
        true: [],
        false: [
          set(state`app.isLoadingModels`, true),
          GetModelManifests(),
          {
            success: [set(state`models.data`, props`result.manifests`)],
            error: onError
          },
          set(state`app.isLoadingModels`, false)
        ]
      }
    ],
    false: []
  }
];
