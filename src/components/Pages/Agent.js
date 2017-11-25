import React from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";

import * as Agent from "../Agent";

export default connect(
  {
    agent: state`app.selectedAgent`
  },
  function AgentPage({ agent }) {
    return <Agent.Info agent={agent} />;
  }
);
