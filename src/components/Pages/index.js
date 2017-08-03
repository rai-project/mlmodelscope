import React from "react";
import Loadable from "react-loadable";

const loadingComponent = function(props) {
  if (props.isLoading) {
    // While our other component is loading...
    if (props.timedOut) {
      // In case we've timed out loading our other component.
      return <div>Loader timed out!</div>;
    } else if (props.pastDelay) {
      // Display a loading screen after a set delay.
      return <div>Loading page...</div>;
    } else {
      // Don't flash "Loading..." when we don't need to.
      return null;
    }
  } else if (props.error) {
    // If we aren't loading, maybe
    return <div>Error! Component failed to load</div>;
  } else {
    // This case shouldn't happen... but we'll return null anyways.
    return null;
  }
};

export const HomePage = Loadable({
  loader: () => import("./Home"),
  loading: loadingComponent
});
export const FrameworkSummaryPage = Loadable({
  loader: () => import("./FrameworkSummary"),
  loading: loadingComponent
});
export const ModelInformationPage = Loadable({
  loader: () => import("./ModelInformation"),
  loading: loadingComponent
});
export const ModelSummaryPage = Loadable({
  loader: () => import("./ModelSummary"),
  loading: loadingComponent
});
export const PredictionResultsPage = Loadable({
  loader: () => import("./PredictionResults"),
  loading: loadingComponent
});

HomePage.preload();
