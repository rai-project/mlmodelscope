import React from "react";
import { Card, Image } from "semantic-ui-react";

import * as logos from "../../assets/logos";

export default function FrameworkSummary({ framework, agents }) {
  if (!framework) {
    return <div />;
  }
  const { name, version } = framework;

  const img = logos[name.toLowerCase()] ? (
    <Image src={logos[name.toLowerCase()]} />
  ) : null;

  const meta =
    agents && agents.length ? (
      <Card.Meta>
        {agents.map(a => {
          return (
            <p key={a.host + a.port}>
              {a.host}:{a.port}
            </p>
          );
        })}
      </Card.Meta>
    ) : null;

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
