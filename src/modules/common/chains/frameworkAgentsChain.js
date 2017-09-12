import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import onError from "./onError";
import { FrameworkAgents } from "../../../swagger/dlframework";

export default [
  when(
    state`app.isLoadingFrameworkAgents`,
    state`app.frameworks.agents`,
    (isLoading, agents) =>
      isLoading !== true && (agents === undefined || agents.length === 0)
  ),
  {
    true: [
      set(state`app.isLoadingFrameworkAgents`, true),
      FrameworkAgents({
        frameworkName: "*",
        frameworkVersion: "*"
      }),
      {
        success: [
          set(state`app.frameworks.agents`, props`response.result.agents`)
        ],
        error: onError
      },
      set(state`app.isLoadingFrameworkAgents`, false)
    ],
    false: []
  }
];
