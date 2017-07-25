import model from "../model";
import modelsRouted from "./signals/modelsRouted";
import frameworksRequested from "./signals/frameworksRequested";

export default {
  state: {
    currentModel: null,
    model: model.state,
    data: []
  },
  signals: {
    modelsRouted,
    frameworksRequested
  }
};
