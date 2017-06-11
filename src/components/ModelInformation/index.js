import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import yeast from "yeast";
import { Container, Header, Divider, List } from "semantic-ui-react";

import ModelGraph from "../ModelGraph";
import ModelLayerAreaChart from "../ModelLayerAreaChart";

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
      <div>
        <Container text style={{ paddingTop: "2em" }}>
          <Header size="large">Description</Header>
          <p style={{ color: "black" }}>{model.description}</p>
          <Divider />
        </Container>
        <Container text>
          <Header size="large">Layer Statistics</Header>
          <ModelLayerAreaChart graph={graph} />
          <Divider />
        </Container>
        <Container text>
          <Header size="large">Graph</Header>
          <ModelGraph graph={graph} />
          <Divider />
        </Container>
        <Container text>
          <Header size="large">References</Header>
          <List bulleted>
            {model.referencesList.map(r =>
              <List.Item style={{ color: "black" }} key={yeast()}>
                <a href={r}>{r}</a>
              </List.Item>
            )}
          </List>
        </Container>
      </div>
    );
  }
);
