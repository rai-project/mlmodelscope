import React from "react";
import { capitalize } from "lodash";
import { Card, Icon, Label } from "semantic-ui-react";

export default function ModelInformationSummary({ model }) {
  if (!model) {
    return <div />;
  }
  const { name, framework, version, input, description } = model;

  const shorten = str => {
    if (str.length > 120) {
      return str.substr(0, 120) + "...";
    }
    return str;
  };

  return (
    <Card>
      <Card.Content>
        <Label color="teal" ribbon="right">
          <Icon name={input.type} />
          {capitalize(input.type)}
        </Label>
        <Card.Header><a href={`/model/${name}`}>{name}</a></Card.Header>
        <Card.Meta>{framework} ({version})</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {shorten(description)}
      </Card.Content>
    </Card>
  );
}
