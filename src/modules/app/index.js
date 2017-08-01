import appLoaded from "./signals/appLoaded";
import navbarClicked from "./signals/navbarClicked";
import homeRouted from "./signals/homeRouted";
import modelInformationsRequest from "./signals/modelInformationsRequest";
import inferenceUrlChanged from "./signals/inferenceUrlChanged";
import infrenceButtonClicked from "./signals/infrenceButtonClicked";
import modelsRouted from "./signals/modelsRouted";
import frameworksRouted from "./signals/frameworksRouted";

export default {
  state: {
    currentPage: "Home",
    name: "CarML",
    isInferring: false,
    isBusy: false,
    inferenceURL:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    models: {},
    frameworks: {}
  },
  signals: {
    appLoaded,
    homeRouted,
    navbarClicked,
    inferenceUrlChanged,
    modelInformationsRequest,
    infrenceButtonClicked,
    modelsRouted,
    frameworksRouted
  }
};
