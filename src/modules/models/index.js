import model from "../model";
import modelsRouted from "./signals/modelsRouted";

export default {
  state: {
    current: null,
    model: model.state,
    data: []
  },
  signals: {
    modelsRouted
  }
};
