import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

export default [set(state`app.isLoaded`, true), set(state`app.name`, "CarML")];
