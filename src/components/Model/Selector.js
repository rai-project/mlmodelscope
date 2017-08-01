import React from "react";
import yeast from "yeast";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { Dropdown } from "semantic-ui-react";
//
export default connect(
  {
    models: state`models.data`,
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
          text: model.name
        };
      });

      console.log(selectors);

      return (
        <Dropdown
          fluid
          search
          selection
          multiple={false}
          options={selectors}
          placeholder={"Select your Neural Network Model"}
          onChange={(e, { value }) => {
            modelSelected({ manifest: JSON.parse(value) });
          }}
        />
      );
    }
  }
);
