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
    "https://static.pexels.com/photos/20787/pexels-photo.jpg"
  ),
  ...frameworkInformationChain,
  ...modelInformationChain,
  set(state`app.predictInputs`, []),
  set(state`app.predictOutputs`, [])
];
