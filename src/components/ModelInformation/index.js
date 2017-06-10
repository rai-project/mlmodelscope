import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import { Container, Grid, Card } from "semantic-ui-react";

import ModelGraph from "../ModelGraph";

export default connect(
  {
    model: state`model.data`,
    graph: state`model.graph`
  },
  function Models({ model, graph }) {
    if (!model) {
      return <div />;
    }
    return (
      <Container>
        <h1>{model.name}</h1>
        <ModelGraph graph={graph} />
      </Container>
    );
  }
);
