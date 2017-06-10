import { lowerCase, replace, first, filter } from "lodash";

export default function populateModelData({ state, props }) {
  const data = filter(state.get("models.data"), m => {
    const name = replace(lowerCase(m.name), " ", "");
    return name === lowerCase(props.name);
  });
  if (data.length === 0) {
    return;
  }
  state.set("model.data", first(data));
}
