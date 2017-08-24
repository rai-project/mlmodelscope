import appLoaded from "./signals/appLoaded";
import navbarClicked from "./signals/navbarClicked";
import homeRouted from "./signals/homeRouted";
import modelInformationsRequest from "./signals/modelInformationsRequest";
import predictURLChanged from "./signals/predictURLChanged";
import predictInputsSet from "./signals/predictInputsSet";
import predictURLAdded from "./signals/predictURLAdded";
import inferenceButtonClicked from "./signals/inferenceButtonClicked";
import modelsRouted from "./signals/modelsRouted";
import frameworksRouted from "./signals/frameworksRouted";

export default {
  state: {
    currentPage: "Home",
    name: "CarML",
    error: null,
    isInferring: false,
    isBusy: false,
    predictInputs: [],
    predictURL: "https://static.pexels.com/photos/20787/pexels-photo.jpg",
    models: {},
    frameworks: {}
  },
  signals: {
    appLoaded,
    homeRouted,
    navbarClicked,
    predictInputsSet,
    predictURLChanged,
    predictURLAdded,
    modelInformationsRequest,
    inferenceButtonClicked,
    modelsRouted,
    frameworksRouted
  }
};
