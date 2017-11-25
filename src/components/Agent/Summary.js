import React from "react";
import { Card, Image } from "semantic-ui-react";

import * as logos from "../../assets/logos";

export default function AgentSummary({ agent }) {
  if (!agent) {
    return <div />;
  }

  const { architecture } = agent;
  let logo = null;
  switch (architecture.toLowerCase()) {
    case "arm":
    case "arm64":
      logo = <Image size="mini" src={logos["arm"]} />;
      break;
    case "x86":
    case "i386":
    case "amd64":
    case "intel":
      logo = <Image size="mini" src={logos["intel"]} />;
      break;
    case "ppc":
    case "ppc64":
    case "ppc64le":
    case "powerpc":
      logo = <Image size="mini" src={logos["powerpc"]} />;
      break;
    default:
      console.log("invalid architecture " + architecture + " encountered");
      logo = null;
  }
  return (
    <Card>
      <Card.Content>
        <Card.Header as="a" href={`/agent/${agent.host}/${agent.port}`}>
          {logo} {agent.hostname}
        </Card.Header>
        <p>
          {agent.host}:{agent.port}
        </p>
      </Card.Content>
    </Card>
  );
}
