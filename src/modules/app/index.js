import modelInformationsRequest from "./signals/modelInformationsRequest";

export default {
  state: {
    currentPage: "Home",
    name: "Dockerfile Builder for Power",
    isInferring: true,
    isBusy: true,
    models: []
  },
  signals: {
    modelInformationsRequest
  }
};
