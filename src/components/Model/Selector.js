import React from "react";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { Dropdown } from "semantic-ui-react";

import visableModel from "../../computed/visableModels";
import * as logos from "../../assets/logos";

export default connect(
  {
    models: visableModel,
    currentModel: state`models.currentModel`,
    modelSelected: signal`model.modelSelected`,
    modelInformationsRequest: signal`app.modelInformationsRequest`
  },
  class ModelSelector extends React.Component {
    componentDidMount() {
      this.props.modelInformationsRequest();
    }
    render() {
      const { models, currentModel, open, modelSelected } = this.props;
      if (!models || models.length === 0) {
        return <div />;
      }
      let ii = 0;
      const selectors = models.map(model => {
        ii++;
        return {
          key: "model-" + ii,
          value: JSON.stringify(model),
          text: model.name,
          description: "model version " + model.version,
          image: {
            avatar: true,
            src: logos[model.framework.name.toLowerCase()]
          }
        };
      });

      let extraOpts = {};
      if (open && !currentModel) {
        extraOpts["open"] = true;
      }
      return (
        <Dropdown
          fluid
          search
          selection
          multiple={false}
          options={selectors}
          placeholder={"Select your Neural Network Model"}
          searchInput={{ type: "text" }}
          onChange={(e, { value }) => {
            modelSelected({ manifest: JSON.parse(value) });
          }}
          {...extraOpts}
        />
      );
    }
  }
);
