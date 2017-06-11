import React from "react";
import yeast from "yeast";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { Dropdown } from "semantic-ui-react";
//
export default connect(
  {
    models: state`models.data`,
    modelSelected: signal`model.modelSelected`
  },
  function ModelSelector({ models, modelSelected }) {
    if (!models || models.length === 0) {
      return <div />;
    }
    const selectors = models.map(model => {
      return { key: yeast(), value: model.name, text: model.name };
    });

    return (
      <Dropdown
        fluid
        search
        selection
        placeholder={"Select your Neural Network Model"}
        options={selectors}
        onChange={(e, data) => modelSelected({ name: data.value })}
      />
    );
  }
);
