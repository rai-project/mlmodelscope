import yeast from "yeast";
import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import { Image, Grid, Container, Message, Divider } from "semantic-ui-react";

import { head, tail, lowerCase } from "lodash";

import Feature from "../Feature";

export default connect(
  {
    model: state`model.data`,
    inferenceURL: state`app.inferenceURL`,
    features: state`app.features`
  },
  function InferenceResults({ model, inferenceURL, features }) {
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
          <Image centered size="medium" shape="rounded" src={inferenceURL} />
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
