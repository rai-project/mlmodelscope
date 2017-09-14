import React from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import yeast from "yeast";
import { Container, Grid, Card } from "semantic-ui-react";

import Summary from "../Framework/Summary";

export default connect(
  {
    frameworks: state`app.frameworks.data`,
    agents: state`app.frameworks.agents`,
    useragentMedia: state`useragent.media`
  },
  function FrameworkSummaryPage({ frameworks, agents, useragentMedia }) {
    if (!frameworks || frameworks.length === 0) {
      return <div />;
    }
    const body = frameworks.map(m => {
      return <Summary key={"info-" + yeast()} framework={m} agents={agents} />;
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
