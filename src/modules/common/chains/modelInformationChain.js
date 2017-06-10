import { compute } from "cerebral";
import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import { first } from "lodash";

import getModelInformations from "../../models/actions/getModelInformations";

export default [
  when(state`models.data`, value => value.length === 0),
  {
    true: [
      getModelInformations,
      {
        onMessage: [set(state`models.data`, props`models`)],
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
    ],
    false: []
  }
];
