import React from "react";
import yeast from "yeast";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import { Dropdown } from "semantic-ui-react";

export default connect(
  {
    models: state`app.models`
  },
  function ModelSelector({ models }) {
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
      />
    );
  }
);
