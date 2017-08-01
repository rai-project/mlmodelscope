import React from "react";
import { Popup, Progress, Grid } from "semantic-ui-react";

import { head, tail, join, capitalize } from "lodash";

export default function LabelFeature({ feature }) {
  if (!feature) {
    return null;
  }
  const cleanupName = name => {
    return capitalize(
      head(join(tail(name.match(/\S+/g)), " ").split(",")).trim()
    );
  };
  return (
    <Grid columns={3}>
      <Popup
        trigger={
          <Grid.Column textAlign="center" width={6}>
            {cleanupName(feature.name)}
          </Grid.Column>
        }
        content={feature.name}
        position="left center"
      />
      <Grid.Column width={8}>
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
