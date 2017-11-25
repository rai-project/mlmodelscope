import React from "react";
import { Header, Message, Divider } from "semantic-ui-react";
import ReactJson from "react-json-view";

import ArchitectureLogo from "./ArchitectureLogo";

export default function Info({ agent }) {
  if (!agent) {
    return null;
  }

  try {
    agent.gpuinfo = JSON.parse(agent.gpuinfo);
  } catch (err) {
    console.log("failed to parse gpuinfo");
  }

  return (
    <Message>
      <Header as="h1">{agent.hostname}</Header>
      {agent.host}:{agent.port}
      <Divider />
      <ReactJson
        src={agent}
        collapsed={2}
        displayObjectSize={false}
        displayDataTypes={false}
      />
    </Message>
  );
}
