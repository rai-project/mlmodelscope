import modelRouted from "./signals/modelRouted";
import modelSelected from "./signals/modelSelected";
import inferenceRouted from "./signals/inferenceRouted";

export default {
  state: {
    graph: null
  },
  signals: {
    modelRouted,
    modelSelected,
    inferenceRouted
  }
};
