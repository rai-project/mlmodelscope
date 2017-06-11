import React from "react";
import { Progress, Grid } from "semantic-ui-react";

import { head, findIndex, tail, take, join } from "lodash";

export default function LabelFeature({ feature }) {
  const cleanupName = name => {
    const r = tail(name.split(" "));
    if (r.length === 1) {
      return head(r).trim();
    }
    const idx = findIndex(r, e => e.endsWith(","));
    return join(take(r, idx + 1).map(e => e.replace(",", "")), " ").trim();
  };
  // debugger;
  return (
    <Grid columns={3}>
      <Grid.Column textAlign="center" width={4}>
        {cleanupName(feature.name)}
      </Grid.Column>
      <Grid.Column width={6}>
        <Progress
          fill
          value={feature.probability}
          total={1}
          size="tiny"
          color={feature.probability > 0.8 ? "green" : "orange"}
        />
      </Grid.Column>
      <Grid.Column textAlign="right" width={2}>
        {Number(feature.probability.toFixed(4))}
      </Grid.Column>
    </Grid>
  );
}
