import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

export default [
  set(state`app.currentPage`, "Agents"),
  set(state`app.name`, "Agents")
];
