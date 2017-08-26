import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

export default [
  set(state`app.currentPage`, "About"),
  set(state`app.name`, "CarML Docs")
];
