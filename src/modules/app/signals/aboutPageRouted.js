import { set } from "cerebral/operators";
import { state, props } from "cerebral/tags";

export default [
  set(state`app.currentPage`, "About"),
  set(state`app.name`, "CarML Docs"),
  set(state`app.currentAboutPage`, props`name`)
];
