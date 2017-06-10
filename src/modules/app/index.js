import appLoaded from "./signals/appLoaded";
import navbarClicked from "./signals/navbarClicked";
import homeRouted from "./signals/homeRouted";
import modelInformationsRequest from "./signals/modelInformationsRequest";

export default {
  state: {
    currentPage: "Home",
    isInferring: true,
    isBusy: true
  },
  signals: {
    appLoaded,
    homeRouted,
    modelInformationsRequest,
    navbarClicked
  }
};
