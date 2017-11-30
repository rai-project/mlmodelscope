import React from "react";
import { findIndex } from "lodash";
import { Card, List, Image } from "semantic-ui-react";
import yeast from "yeast";

import * as Agent from "../Agent";
import * as logos from "../../assets/logos";

export default function FrameworkSummary({ framework, agents }) {
  if (!framework) {
    return <div />;
  }
  const { name, version } = framework;

  const img = logos[name.toLowerCase()] ? (
    <Image fluid src={logos[name.toLowerCase()]} />
  ) : null;

  const agentsList =
    agents && agents.length
      ? agents.map(a => {
          if (findIndex(a.frameworks, { name, version }) === -1) {
            return null;
          }
          return (
            <List.Item key={yeast()}>
              <Agent.Summary agent={a} listItem />
            </List.Item>
          );
        })
      : null;

  const meta = agentsList ? <List>{agentsList}</List> : null;

  return (
    <Card>
      {img}
      <Card.Content>
        <Card.Header as="a" href={`/framework/${name}/${version}`}>
          {name} ({version})
        </Card.Header>
        {meta}
      </Card.Content>
    </Card>
  );
}
