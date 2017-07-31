import { redirect } from "@cerebral/router/operators";
import { set, equals } from "cerebral/operators";
import { state, props, string } from "cerebral/tags";

import resetError from "../../common/chains/resetError";

export default [
  ...resetError,
  set(state`app.currentPage`, props`name`),
  equals(props`name`),
  {
    Home: [redirect(string`/`)],
    Frameworks: [redirect(string`/frameworks`)],
    Models: [redirect(string`/models`)]
  }
];
