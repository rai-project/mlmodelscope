import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

import frameworkInformationChain from "../../common/chains/frameworkInformationChain";

export default [
  set(state`app.currentPage`, "Frameworks"),
  set(state`app.name`, "CarML Frameworks"),
  ...frameworkInformationChain
];
