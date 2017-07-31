import React from "react";
import { capitalize } from "lodash";
import { Card, Icon, Label, Image } from "semantic-ui-react";

import logos from "./logos";

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
          {name}
        </Card.Header>
        <Card.Meta>
          {version}
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}
