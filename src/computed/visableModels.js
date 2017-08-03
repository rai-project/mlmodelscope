import { compute } from "cerebral";
import { state } from "cerebral/tags";
import { filter } from "lodash";

const visableModels = compute(state`models.data`, (items, get) => {
  return filter(items, item => !item.hidden);
});

export default visableModels;
