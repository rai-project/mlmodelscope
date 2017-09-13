import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

import frameworkInformationChain from "../../common/chains/frameworkInformationChain";
import modelInformationChain from "../../common/chains/modelInformationChain";
import resetError from "../../common/chains/resetError";

export default [
  ...resetError,
  set(state`app.currentPage`, "Home"),
  set(state`app.name`, "CarML"),

  set(
    state`app.predictURL`,
    "http://ww4.hdnux.com/photos/41/15/35/8705883/4/920x920.jpg"
  ),
  ...frameworkInformationChain,
  ...modelInformationChain,
  set(state`app.predictInputs`, []),
  set(state`app.predictOutputs`, [])
];
