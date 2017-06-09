import React from "react";
import yeast from "yeast";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import ReactPlaceholder from "react-placeholder";
import {
  Header,
  Divider,
  Container,
  Menu,
  Button,
  Segment,
  Grid,
  Sidebar,
  Image,
  Card,
  Icon
} from "semantic-ui-react";

export default connect({}, function ModelInformation(params) {
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
    input
  } = model;

  // const placeholder = <ReactPlaceholder type="media" rows={7} />;
  return (
    <Card>
      <Card.Content>
        <Image floated="left">
          <Icon fitted name={input.type} />
        </Image>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{framework}</Card.Meta>
        <Card.Description>description</Card.Description>
      </Card.Content>
      <Card.Content extra>
        stuff
      </Card.Content>
    </Card>
  );
});
