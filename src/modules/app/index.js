import appLoaded from "./signals/appLoaded";
import navbarClicked from "./signals/navbarClicked";
import homeRouted from "./signals/homeRouted";
import modelInformationsRequest from "./signals/modelInformationsRequest";
import inferenceUrlChanged from "./signals/inferenceUrlChanged";
import infrenceButtonClicked from "./signals/infrenceButtonClicked";

export default {
  state: {
    currentPage: "Home",
    name: "CarML",
    isInferring: false,
    isBusy: false,
    inferenceURL: null
  },
  signals: {
    appLoaded,
    homeRouted,
    navbarClicked,
    inferenceUrlChanged,
    modelInformationsRequest,
    infrenceButtonClicked
  }
};
