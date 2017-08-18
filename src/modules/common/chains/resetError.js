import { unset } from "cerebral/operators";
import { state } from "cerebral/tags";

export default [unset(state`app.error`)];
