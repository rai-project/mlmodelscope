import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

import resetError from "../../common/chains/resetError";

export default [...resetError, set(state`models.selectedModels`, props`manifests`)];
