import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

export default [
  set(state`app.currentPage`, "Agent"),
  set(state`app.name`, "Agent")
];
