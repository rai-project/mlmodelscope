import { set } from "cerebral/operators";
import { state } from "cerebral/tags";
import frameworkInformationChain from "../../common/chains/frameworkInformationChain";
import frameworkAgentsChain from "../../common/chains/frameworkAgentsChain";

export default [
  set(state`app.currentPage`, "Agents"),
  set(state`app.name`, "CarML Agents"),
  ...frameworkInformationChain,
  ...frameworkAgentsChain
];
