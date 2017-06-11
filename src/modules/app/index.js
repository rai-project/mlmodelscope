import appLoaded from "./signals/appLoaded";
import navbarClicked from "./signals/navbarClicked";
import homeRouted from "./signals/homeRouted";
import modelInformationsRequest from "./signals/modelInformationsRequest";
import urlChanged from "./signals/urlChanged";
import modelInferRequest from "./signals/modelInferRequest";

export default {
  state: {
    currentPage: "Home",
    name: "CarML",
    isInferring: false,
    isBusy: true,
    url: ""
  },
  signals: {
    appLoaded,
    homeRouted,
    modelInformationsRequest,
    navbarClicked,
    urlChanged,
    modelInferRequest
  }
};
