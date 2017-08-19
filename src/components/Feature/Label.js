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
          <Grid.Column textAlign="left" width={compact ? 10 : 6}>
            {cleanupName(feature.name)}
          </Grid.Column>
        }
        content={trimStart(feature.name, PREFIX)}
        position="left center"
      />
      {compact
        ? null
        : <Grid.Column width={8}>
            <Progress
              size="tiny"
              percent={100 * feature.probability}
              color={feature.probability > 0.5 ? "green" : "orange"}
            />
          </Grid.Column>}
      <Grid.Column textAlign="right" width={2}>
        {Number(feature.probability.toFixed(4))}
      </Grid.Column>
    </Grid>
  );
}
