import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

import modelInformationChain from "../../common/chains/modelInformationChain";

export default [
  set(state`app.currentPage`, "Models"),
  set(state`app.name`, "CarML Models"),
  ...modelInformationChain
];
