import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

export default [
  set(state`app.currentPage`, "Home"),
  set(state`app.name`, "CarML")
];
