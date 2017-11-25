import React from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import yeast from "yeast";
import { Container, Divider, Grid, Card } from "semantic-ui-react";

import ReactJson from "react-json-view";
import Log from "react-log";

import Summary from "../Agent/Summary";

export default connect(
  {
    agents: state`app.frameworks.agents`,
    useragentMedia: state`useragent.media`
  },
  function AgentsPage({ agents, useragentMedia }) {
    if (!agents || agents.length === 0) {
      return <ReactJson src={{ agents }} />;
    }
    const body = agents.map(a => {
      return <Summary key={"info-" + yeast()} agent={a} />;
    });
    return (
      <Container>
        <Log>
          <h1>agents</h1>
        </Log>
        <Grid.Row centered columns={1}>
          <Card.Group itemsPerRow={useragentMedia.mobile ? 1 : 3}>
            {body}
          </Card.Group>
        </Grid.Row>
        <Divider />
      </Container>
    );
  }
);
