import { compute } from "cerebral";
import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import { first } from "lodash";

import getModelInformations from "../actions/getModelInformations";
import getModelGraph from "../../model/actions/getModelGraph";

export default [
  set(state`app.isLoaded`, true),
  getModelInformations,
  {
    onMessage: [
      set(state`models.data`, props`models`),
      when(props`models`, value => value.length !== 0),
      {
        true: [
          set(
            state`models.current`,
            compute(props`models`, models => first(models).name)
          ),
          getModelGraph
        ],
        false: []
      }
    ],
    onError: [
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
