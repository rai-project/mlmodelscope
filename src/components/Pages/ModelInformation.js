import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import yeast from "yeast";
import { Container, Header, Divider, List } from "semantic-ui-react";

import Graph from "../Model/Graph";
import LayerAreaChart from "../Model/LayerAreaChart";

export default connect(
  {
    model: state`model.data`,
    graph: state`model.graph`
  },
  function ModelInformationPage({ model, graph }) {
    if (!model) {
      return <div />;
    }
    return (
      <div>
        <Container text style={{ paddingTop: "2em" }}>
          <Header size="large">Description</Header>
          <p style={{ color: "black" }}>
            {model.description}
          </p>
        </Container>
        <Container text>
          <LayerAreaChart
            header={<Header size="large">Layer Statistics</Header>}
            divider={<Divider />}
            graph={graph}
          />
        </Container>
        <Container text>
          <Graph
            header={<Header size="large">Graph</Header>}
            divider={<Divider />}
            graph={graph}
          />
        </Container>
        <Container text>
          <Divider />
          <Header size="large">References</Header>
          <List bulleted>
            {model.reference.map(r =>
              <List.Item style={{ color: "black" }} key={yeast()}>
                <a href={r}>
                  {r}
                </a>
              </List.Item>
            )}
          </List>
        </Container>
      </div>
    );
  }
);
