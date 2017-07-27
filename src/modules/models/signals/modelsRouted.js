import { set } from "cerebral/operators";
import { state, output, props, input } from "cerebral/tags";

import onError from "../../common/chains/onError";
import { GetModelManifests } from "../../../swagger/dlframework";
import modelInformationChain from "../../common/chains/modelInformationChain";

export default [
  set(state`app.currentPage`, "Models"),
  set(state`app.name`, "CarML Models"),
  GetModelManifests(),
  {
    success: [set(state`models.data`, props`result.manifests`)],
    error: onError
  },
  ...modelInformationChain
];
