import React from "react";
import { connect } from "cerebral/react";
import { Section } from "../Documentation";

export default connect({}, function AboutPage() {
  return <Section name="Introduction" />;
});
