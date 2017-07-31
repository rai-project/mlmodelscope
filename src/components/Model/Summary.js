import React from "react";
import { capitalize } from "lodash";
import { Card, Icon, Label } from "semantic-ui-react";

export default function ModelSummary({ model }) {
  if (!model) {
    return <div />;
  }
  const { name, framework, version, inputs, description } = model;

  const shorten = str => {
    if (str.length > 120) {
      return str.substr(0, 120) + "...";
    }
    return str;
  };

  return (
    <Card>
      <Card.Content>
        <Label
          ribbon="right"
          style={{
            color: "white",
            backgroundColor: "#0DB7C4",
            borderColor: "#07717a"
          }}
        >
          <Icon name={inputs[0].type} />
          {capitalize(inputs[0].type)} Input
        </Label>
        <Card.Header as="a" href={`/model/${name}/${version}`}>
          {name}
        </Card.Header>
        <Card.Meta>
          {framework ? framework.name : "Unknown Framework"} ({version})
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {shorten(description)}
      </Card.Content>
    </Card>
  );
}
