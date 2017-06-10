import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

import modelInformationChain from "../../common/chains/modelInformationChain";

export default [
  set(state`app.isBusy`, true),
  ...modelInformationChain,
  set(state`app.isBusy`, false)
];
