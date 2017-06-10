import appLoaded from "./signals/appLoaded";
import navbarClicked from "./signals/navbarClicked";
import homeRouted from "./signals/homeRouted";
import modelInformationsRequest from "./signals/modelInformationsRequest";
import modelSelected from "./signals/modelSelected";
//import urlTyped from "./signals/urlTyped";

export default {
  state: {
    currentPage: "Home",
    name: "CarML",
    isInferring: false,
    isBusy: true
  },
  signals: {
    appLoaded,
    homeRouted,
    modelInformationsRequest,
    navbarClicked,
    modelSelected
  }
};
