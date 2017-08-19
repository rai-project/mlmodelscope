import React from "react";
import { Popup, Progress, Grid } from "semantic-ui-react";

import { startsWith, trimStart, head, tail, join, capitalize } from "lodash";

const PREFIX = "<> ";

export default function LabelFeature({ feature, compact = false }) {
  if (!feature) {
    return null;
  }
  const cleanupName = name => {
    if (startsWith(name, PREFIX)) {
      return trimStart(name, PREFIX);
    }
    return capitalize(
      head(join(tail(name.match(/\S+/g)), " ").split(",")).trim()
    );
  };
  return (
    <Grid columns={3}>
      <Popup
        trigger={
          <Grid.Column textAlign="center" width={compact ? 8 : 6}>
            {cleanupName(feature.name)}
          </Grid.Column>
        }
        content={trimStart(feature.name, PREFIX)}
        position="left center"
      />
      <Grid.Column width={compact ? 6 : 8}>
        <Progress
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
