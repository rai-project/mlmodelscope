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

const delayLoad = function(loader) {
  return Loadable({
    loader,
    loading: loadingComponent
  });
};

export const HomePage = delayLoad(() => import("./Home"));
export const FrameworkSummaryPage = delayLoad(() =>
  import("./FrameworkSummary")
);
export const ModelInformationPage = delayLoad(() =>
  import("./ModelInformation")
);
export const ModelSummaryPage = delayLoad(() => import("./ModelSummary"));
export const PredictionResultsPage = delayLoad(() =>
  import("./PredictionResults")
);
export const AboutPage = delayLoad(() => import("./About"));
HomePage.preload();
