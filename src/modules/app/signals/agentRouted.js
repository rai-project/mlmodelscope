import { compute } from "cerebral";
import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import { head, filter } from "lodash";

import frameworkInformationChain from "../../common/chains/frameworkInformationChain";
import frameworkAgentsChain from "../../common/chains/frameworkAgentsChain";

export default [
  set(state`app.currentPage`, "Agent"),
  set(
    state`app.name`,
    compute(
      props`host`,
      props`port`,
      (host, port) => "Agent " + host + ":" + port
    )
  ),
  ...frameworkInformationChain,
  ...frameworkAgentsChain,
  set(
    state`app.selectedAgent`,
    compute(
      state`app.frameworks.agents`,
      props`host`,
      props`port`,
      (agents, host, port) =>
        head(
          filter(agents, {
            host,
            port
          })
        )
    )
  )
];
