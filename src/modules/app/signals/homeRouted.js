import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

import frameworkInformationChain from "../../common/chains/frameworkInformationChain";
import modelInformationChain from "../../common/chains/modelInformationChain";
import resetError from "../../common/chains/resetError";

export default [
  ...resetError,
  set(state`app.currentPage`, "Home"),
  set(state`app.name`, "CarML"),
  ...frameworkInformationChain,
  ...modelInformationChain
];
