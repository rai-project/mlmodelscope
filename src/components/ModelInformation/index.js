import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";

export default function ModelInformation(params) {
  const model = params.model;
  if (!model) {
    return <div />;
  }
  const {
    name,
    framework,
    version,
    type,
    datasetName,
    graphUrl,
    featuresUrl,
    input,
    description
  } = model;

  const shorten = str => {
    if (str.length > 120) {
      return str.substr(0, 120) + "...";
    }
    return str;
  };

  return (
    <Card>
      <Card.Content>
        <Image floated="left">
          <Icon fitted name={input.type} />
        </Image>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{framework}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {shorten(description)}
      </Card.Content>
    </Card>
  );
}
