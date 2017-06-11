import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import getInferenceResults from "../../model/actions/getInferenceResults";

export default [
  getInferenceResults,
  {
    onMessage: [set(state`app.features`, props`features`)],
    onEnd: [
      when(props`code`),
      {
        true: [
          set(state`app.isError`, true),
          set(state`app.errorMessage`, props`message`)
        ],
        false: []
      }
    ]
  }
];
