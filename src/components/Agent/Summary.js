import React from "react";
import { Card, List, Divider } from "semantic-ui-react";
import yeast from "yeast";

import ArchitectureLogo from "./ArchitectureLogo";

export default function Agent({ agent, listItem }) {
  if (!agent) {
    return null;
  }
  if (listItem) {
    return (
      <List.Item>
        <ArchitectureLogo avatar {...agent} />
        {agent.hostname}
      </List.Item>
    );
  }

  return (
    <Card>
      <Card.Content>
        <ArchitectureLogo {...agent} />
        <Divider />
        <Card.Header as="a" href={`/agent/${agent.host}/${agent.port}`}>
          {agent.hostname}
        </Card.Header>
        {agent.host}:{agent.port}
        <Divider />
        <List>
          {agent.frameworks.map(framework => (
            <List.Item key={yeast()} as="li">
              {framework.name + ":(" + framework.version + ")"}
            </List.Item>
          ))}
        </List>
      </Card.Content>
    </Card>
  );
}
