import { redirect } from "@cerebral/router/operators";
import { set, equals } from "cerebral/operators";
import { state, props, string } from "cerebral/tags";

export default [set(state`app.url`, props`url`)];
