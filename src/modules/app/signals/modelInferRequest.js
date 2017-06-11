import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

import modelInferChain from "../../common/chains/modelInferChain";

export default [
  set(state`app.isInferring`, true),
  ...modelInferChain,
  set(state`app.isInferring`, false)
];
