import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

import modelInformationChain from "../../common/chains/modelInformationChain";
import resetError from "../../common/chains/resetError";
import frameworksRequested from "../../models/signals/frameworksRequested";

export default [
  ...resetError,
  set(state`app.currentPage`, "Home"),
  set(state`app.name`, "CarML"),
  ...frameworksRequested,
  ...modelInformationChain
];
