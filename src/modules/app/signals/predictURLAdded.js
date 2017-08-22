import { push } from "cerebral/operators";
import { state, props } from "cerebral/tags";

export default [push(state`app.predictInputs`, state`app.predictURL`)];
