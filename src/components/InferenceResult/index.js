import "./InferenceResult.css";
import React, { Component } from "react";
import { ExperimentContext } from "../../context/ExperimentContext";
import ExperimentContentTitle from "../ExperimentSteps/ExperimentContentTitle";
import ImageInferenceResult from "./ImageInferenceResult";
import DatasetInferenceResult from "./DatasetInferenceResult";


class InferenceResult extends Component {
  render() {
    var resultContent
    if (this.props.context.dataset !== null) {
      resultContent = <DatasetInferenceResult />;
    } else if (this.props.context.imageUrls.length !== 0) {
      resultContent = <ImageInferenceResult />;
    }
    return (
      <div style={{width: "100%"}}>
          <ExperimentContentTitle text="Inference Result" />

          {resultContent}
      </div>
    );
  }
}

export default props => (
  <ExperimentContext.Consumer>
    {context => <InferenceResult {...props} context={context} />}
  </ExperimentContext.Consumer>
);