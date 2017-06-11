import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import { Container, Header, Divider, List } from "semantic-ui-react";

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
      <div>
        <Container inverted text style={{ paddingTop: "2em" }}>
          <Header size="large">Description</Header>
          <p style={{ color: "black" }}>{model.description}</p>
          <Divider />
        </Container>
        <Container inverted text>
          <Header size="large">Graph</Header>
          <ModelGraph graph={graph} />
          <Divider />
        </Container>
        <Container inverted text>
          <Header size="large">References</Header>
          <List bulleted>
            {model.referencesList.map(ref =>
              <List.Item style={{ color: "black" }}>
                <a href={ref}>{ref}</a>
              </List.Item>
            )}
          </List>
        </Container>
      </div>
    );
  }
);
