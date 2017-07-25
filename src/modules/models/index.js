import model from "../model";
import modelsRouted from "./signals/modelsRouted";
import frameworksRequested from "./signals/frameworksRequested";

import onError from "../common/chains/onError";

import HTTPError from "../common/errors/http";

export default {
  state: {
    currentModel: null,
    model: model.state,
    data: []
  },
  signals: {
    modelsRouted,
    frameworksRequested: {
      signal: frameworksRequested,
      catch: new Map([[HTTPError, onError]])
    }
  }
};
