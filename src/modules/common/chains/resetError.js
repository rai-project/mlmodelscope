import { set } from "cerebral/operators";
import { state } from "cerebral/tags";

export default [
  set(state`app.isError`, false),
  set(state`app.errorMessage`, "")
];
