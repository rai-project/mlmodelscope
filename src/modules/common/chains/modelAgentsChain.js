import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import onError from "./onError";
import { ModelAgents } from "../../../swagger/dlframework";

export default [
  when(
    state`app.status.isLoadingModelAgents`,
    state`models.agents`,
    (isLoading, agents) =>
      isLoading !== true && (agents === undefined || agents.length === 0)
  ),
  {
    true: [
      set(state`app.status.isLoadingModelAgents`, true),
      ModelAgents({
        frameworkName: "*",
        frameworkVersion: "*",
        modelName: "*",
        modelVersion: "*"
      }),
      {
        success: [set(state`models.agents`, props`response.result.agents`)],
        error: onError
      },
      set(state`app.status.isLoadingModelAgents`, false)
    ],
    false: []
  }
];
