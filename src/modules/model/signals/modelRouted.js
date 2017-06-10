import { compute } from "cerebral";
import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import { first, filter } from "lodash";

import getModelGraph from "../actions/getModelGraph";
import modelInformationChain from "../../common/chains/modelInformationChain";

export default [
  set(state`app.currentPage`, "ModelInformation"),
  ...modelInformationChain,
  set(state`models.currentModel`, props`name`),
  set(state`model.data`, compute(props`name`), name =>
    first(filter(state`models.data`, m => m.name === name))
  ),
  getModelGraph,
  {
    onMessage: [set(state`model.graph`, props`model`)],
    onEnd: [
      when(props`code`),
      {
        true: [
          set(state`app.isError`, true),
          set(state`app.errorMessage`, props`message`)
        ]
      }
    ]
  }
];
