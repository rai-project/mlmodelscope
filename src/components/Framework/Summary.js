import React from "react";
import { capitalize } from "lodash";
import { Card, Icon, Label, Image } from "semantic-ui-react";

import * as logos from "./logos";

export default function FrameworkSummary({ framework }) {
  if (!framework) {
    return <div />;
  }
  const { name, version } = framework;

  const img = logos[name.toLowerCase()]
    ? <Image src={logos[name.toLowerCase()]} />
    : null;
  return (
    <Card>
      {img}
      <Card.Content>
        <Card.Header as="a" href={`/framework/${name}/${version}`}>
          {name} ({version})
        </Card.Header>
      </Card.Content>
    </Card>
  );
}
