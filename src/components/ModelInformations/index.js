import React from "react";
import yeast from "yeast";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import ModelInformation from "../ModelInformation";
import { Card } from "semantic-ui-react";

export default connect(
  {
    models: state`models.data`
  },
  function Models({ models }) {
    if (!models || models.length === 0) {
      return <div />;
    }
    const body = models.map(m => {
      return <ModelInformation key={m.name} model={m} />;
    });
    return <Card.Group itemsPerRow={3}>{body}</Card.Group>;
  }
);
