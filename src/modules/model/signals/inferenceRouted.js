import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import getModelGraph from "../actions/getModelGraph";
import populateModelData from "../actions/populateModelData";
import modelInformationChain from "../../common/chains/modelInformationChain";

export default [set(state`app.currentPage`, "InferenceResults")];
