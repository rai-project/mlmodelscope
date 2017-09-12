import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

import modelInformationChain from "../../common/chains/modelInformationChain";
import resetError from "../../common/chains/resetError";

export default [
  ...resetError,
  set(state`app.status.isBusy`, true),
  ...modelInformationChain,
  set(state`app.status.isBusy`, false)
];
