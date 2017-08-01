import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import yeast from "yeast";
import { Container, Grid, Card } from "semantic-ui-react";
import visableModel from "../../computed/visableModels";
import Summary from "./Summary";

export default connect(
  {
    models: visableModel,
    useragentMedia: state`useragent.media`
  },
  function SummaryPage({ models, useragentMedia }) {
    if (!models || models.length === 0) {
      return <div />;
    }
    const body = models.map(m => {
      return <Summary key={"info-" + yeast()} model={m} />;
    });
    return (
      <Container>
        <Grid.Row centered columns={1}>
          <Card.Group itemsPerRow={useragentMedia.mobile ? 1 : 3}>
            {body}
          </Card.Group>
        </Grid.Row>
      </Container>
    );
  }
);
