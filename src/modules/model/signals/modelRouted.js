import { set, when } from "cerebral/operators";
import { state, props, inputs } from "cerebral/tags";

import populateModelData from "../actions/populateModelData";
import resetError from "../../common/chains/resetError";
import modelInformationChain from "../../common/chains/modelInformationChain";
import { ModelManifests } from "../../../swagger/dlframework";
import onError from "../../common/chains/onError";

export default [
  ...resetError,
  set(state`app.currentPage`, "ModelInformation"),
  ...modelInformationChain,
  set(state`models.currentModel`, props`name`),
  set(state`app.name`, props`name`),
  populateModelData,
  ModelManifests({
    frameworkName: "*",
    frameworkVersion: "*",
    modelName: props`name`,
    modelVersion: props`version`
  }),
  {
    success: [set(state`model.graph`, props`model`)],
    error: onError
  }
];
