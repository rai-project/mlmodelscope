import yeast from "yeast";
import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import { head, tail, filter, lowerCase } from "lodash";
import {
  Header,
  Image,
  Grid,
  Container,
  Message,
  Divider,
  Segment
} from "semantic-ui-react";

import Feature from "../Feature";

function PredictionResultsOne({
  model,
  input,
  features,
  showImage = true,
  compact = false
}) {
  features = filter(features, features => features !== undefined);
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
    <Grid relaxed>
      {showImage
        ? <div>
            <Grid.Row divided textAlign="center">
              <Image centered size="medium" shape="rounded" src={input} />
            </Grid.Row>
            <Divider hidden />
          </div>
        : null}
      <Grid.Row>
        <Segment secondary>
          {makeFeatureTag({
            feature: head(features),
            key: "feature-" + yeast(),
            compact: compact
          })}
        </Segment>
      </Grid.Row>
      <Divider horizontal />
      {tail(features).map(features =>
        <Grid.Row key={yeast()}>
          {makeFeatureTag({
            feature: features,
            key: "feature-" + yeast(),
            compact: compact
          })}
        </Grid.Row>
      )}
    </Grid>
  );
}

export default connect(
  {
    outputs: state`app.predictOutputs`
  },
  function PredictionResults({ outputs }) {
    if (outputs.length === 0) {
      return <div />;
    }
    if (outputs.length === 1) {
      const output = head(outputs);
      return <PredictionResultsOne showImage compcat={false} {...output} />;
    }
    const input = head(outputs).input;
    return (
      <Container text>
        <div>
          <Grid.Row divided textAlign="center">
            <Image centered size="medium" shape="rounded" src={input} />
          </Grid.Row>
          <Divider hidden />
          <Grid
            stackable
            celled="internally"
            divided="vertically"
            padded="vertically"
            columns={outputs.length}
          >
            <Grid.Row>
              {outputs.map(output =>
                <Grid.Column key={yeast()}>
                  <Segment>
                    <Header as="h3">
                      {output.model.name}
                    </Header>
                    <PredictionResultsOne
                      showImage={false}
                      compact={true}
                      {...output}
                    />
                  </Segment>
                </Grid.Column>
              )}
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
  }
);
