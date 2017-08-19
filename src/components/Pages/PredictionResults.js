import yeast from "yeast";
import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import { head, tail, filter, lowerCase } from "lodash";
import { Image, Grid, Container, Message, Divider } from "semantic-ui-react";

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
    <Grid>
      {showImage
        ? <div>
            <Grid.Row divided textAlign="center">
              <Image centered size="medium" shape="rounded" src={input} />
            </Grid.Row>
            <Divider hidden />
          </div>
        : null}
      <Grid.Row stretched>
        <Container text>
          <Message positive>
            {makeFeatureTag({
              feature: head(features),
              key: "feature-" + yeast(),
              compact: compact
            })}
          </Message>
        </Container>
      </Grid.Row>
      <Divider horizontal />
      <Grid.Row stretched>
        {tail(features).map(features =>
          <Container text key={yeast()}>
            {makeFeatureTag({
              feature: features,
              key: "feature-" + yeast(),
              compact: compact
            })}
          </Container>
        )}
      </Grid.Row>
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
            celled
            stackable
            divided="vertically"
            padded="vertically"
            columns={outputs.length}
          >
            <Grid.Row>
              {outputs.map(output => {
                return (
                  <Grid.Column key={yeast()}>
                    <h3>
                      {output.model.name}
                    </h3>
                    <PredictionResultsOne
                      showImage={false}
                      compact={true}
                      {...output}
                    />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
  }
);
