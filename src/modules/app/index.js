import appLoaded from "./signals/appLoaded";
import navbarClicked from "./signals/navbarClicked";
import homeRouted from "./signals/homeRouted";
import modelInformationsRequest from "./signals/modelInformationsRequest";
import predictURLChanged from "./signals/predictURLChanged";
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
    predictURL: "https://static.pexels.com/photos/20787/pexels-photo.jpg",
    models: {},
    frameworks: {},
  },
  signals: {
    appLoaded,
    homeRouted,
    navbarClicked,
    predictURLChanged,
    modelInformationsRequest,
    inferenceButtonClicked,
    modelsRouted,
    frameworksRouted,
  },
};
