import yeast from "yeast";
import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import { filter } from "lodash";
import { Image, Grid, Container, Message, Divider } from "semantic-ui-react";

import { head, tail, lowerCase } from "lodash";

import Feature from "../Feature";

export default connect(
  {
    model: state`models.currentModel`,
    predictURL: state`app.predictURL`,
    features: state`app.features`
  },
  function PredictionResults({ model, predictURL, features }) {
    features = filter(features, feature => feature !== undefined);
    const makeFeatureTag = function(props) {
      const outputType =
        (model.output ? model.output.type : undefined) || "label";
      switch (lowerCase(outputType)) {
        case "coordinates":
          return <Feature.Location {...props} />;
        default:
          return <Feature.Label {...props} />;
      }
    };
    return (
      <Container text>
        <Grid.Row divided textAlign="center">
          <Image centered size="medium" shape="rounded" src={predictURL} />
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <Message positive>
            {makeFeatureTag({
              feature: head(features),
              key: "feature-" + yeast()
            })}
          </Message>
        </Grid.Row>
        <Divider horizontal />
        <Grid.Row>
          {tail(features).map(feature =>
            makeFeatureTag({ feature: feature, key: "feature-" + yeast() })
          )}
        </Grid.Row>
      </Container>
    );
  }
);
