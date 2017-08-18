import { compute } from "cerebral";
import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import { head, filter } from "lodash";
import resetError from "../../common/chains/resetError";
import modelInformationChain from "../../common/chains/modelInformationChain";
import { ModelManifests } from "../../../swagger/dlframework";
import onError from "../../common/chains/onError";

export default [
  ...resetError,
  set(state`app.currentPage`, "ModelInformation"),
  ...modelInformationChain,
  set(
    state`models.selectedModels`,
    compute(state`models.data`, props`name`, props`version`, (models, name, version) =>
      head(
        filter(models, {
          name,
          version,
        })
      )
    )
  ),
  set(state`app.name`, props`name`),
  ModelManifests({
    frameworkName: "*",
    frameworkVersion: "*",
    modelName: props`name`,
    modelVersion: props`version`,
  }),
  {
    success: [set(state`model.graph`, props`model`)],
    error: onError,
  },
];
