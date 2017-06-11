import modelRouted from "./signals/modelRouted";
import modelSelected from "./signals/modelSelected";

export default {
  state: {
    graph: null
  },
  signals: {
    modelRouted,
    modelSelected
  }
};
