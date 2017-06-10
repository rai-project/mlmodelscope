import model from "../model";
import modelsRouted from "./signals/modelsRouted";

export default {
  state: {
    currentModel: null,
    model: model.state,
    data: []
  },
  signals: {
    modelsRouted
  }
};
