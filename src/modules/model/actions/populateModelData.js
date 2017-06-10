import { lowerCase, replace, first, filter } from "lodash";

export default function populateModelData({ state, props }) {
  const p = replace(lowerCase(props.name), " ", "");
  let data = filter(state.get("models.data"), m => {
    const name = replace(lowerCase(m.name), " ", "");
    return name === p;
  });
  if (data.length !== 0) {
    state.set("model.data", first(data));
    return;
  }
  data = filter(state.get("models.data"), m => {
    const name = replace(lowerCase(m.name), " ", "");
    return name.includes(p) || p.includes(name);
  });
  if (data.length !== 0) {
    state.set("model.data", first(data));
    return;
  }
}
