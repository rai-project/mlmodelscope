import React from "react";
import yeast from "yeast";
import visableModel from "../../computed/visableModels";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { Dropdown } from "semantic-ui-react";
import * as logos from "../../assets/logos";
//
export default connect(
  {
    models: visableModel,
    modelSelected: signal`model.modelSelected`,
    modelInformationsRequest: signal`app.modelInformationsRequest`
  },
  class ModelSelector extends React.Component {
    componentDidMount() {
      this.props.modelInformationsRequest();
    }
    render() {
      const { models, modelSelected } = this.props;
      if (!models || models.length === 0) {
        return <div />;
      }
      const selectors = models.map(model => {
        return {
          key: yeast(),
          value: JSON.stringify(model),
          text: model.name,
          description: "model version " + model.version,
          image: {
            avatar: true,
            src: logos[model.framework.name.toLowerCase()]
          }
        };
      });

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
        />
      );
    }
  }
);
