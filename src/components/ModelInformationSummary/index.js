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
        <Label
          ribbon="right"
          style={{
            color: "white",
            backgroundColor: "#0DB7C4",
            borderColor: "#0DB7C4"
          }}
        >
          {/* <Icon name={input.type} />
          {capitalize(input.type)} Input */}
        </Label>
        <Card.Header as="a" href={`/model/${name}`}>
          {name}
        </Card.Header>
        <Card.Meta>
          {framework ? framework.name : "TODO"} ({version})
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {shorten(description)}
      </Card.Content>
    </Card>
  );
}
