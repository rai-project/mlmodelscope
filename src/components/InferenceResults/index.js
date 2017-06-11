import yeast from "yeast";
import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import { Image, Grid, Container, Segment, Divider } from "semantic-ui-react";

import { head, tail } from "lodash";

import LabelFeature from "../LabelFeature";

export default connect(
  {
    inferenceURL: state`app.inferenceURL`,
    features: state`app.features`
  },
  function InferenceResults({ inferenceURL, features }) {
    return (
      <Container text>
        <Grid.Row divided>
          <Image src={inferenceURL} />
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <Segment size={"large"}>
            <LabelFeature feature={head(features)} key={"feature-" + yeast()} />
          </Segment>
        </Grid.Row>
        <Divider horizontal />
        <Grid.Row>
          {tail(features).map(feature =>
            <LabelFeature feature={feature} key={"feature-" + yeast()} />
          )}
        </Grid.Row>
      </Container>
    );
  }
);
