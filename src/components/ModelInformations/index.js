import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import yeast from "yeast";
import { Container, Grid, Card } from "semantic-ui-react";

import ModelInformationSummary from "../ModelInformationSummary";

export default connect(
  {
    models: state`models.data`
  },
  function Models({ models }) {
    if (!models || models.length === 0) {
      return <div />;
    }
    const body = models.map(m => {
      return <ModelInformationSummary key={"info-" + yeast()} model={m} />;
    });
    return (
      <Container>
        <Grid.Row centered columns={1}>
          <Card.Group itemsPerRow={3}>
            {body}
          </Card.Group>
        </Grid.Row>
      </Container>
    );
  }
);
