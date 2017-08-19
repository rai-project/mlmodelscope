import yeast from "yeast";
import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import { head, filter, lowerCase } from "lodash";
import {
  Header,
  Image,
  Grid,
  List,
  Container,
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
    <Grid relaxed centered>
      {showImage
        ? <div>
            <Grid.Row divided textAlign="center">
              <Image centered size="medium" shape="rounded" src={input} />
            </Grid.Row>
            <Divider hidden />
          </div>
        : null}
      <List divided>
        {features.map(features =>
          <List.Item key={yeast()}>
            <List.Content>
              {makeFeatureTag({
                feature: features,
                key: "feature-" + yeast(),
                compact: compact
              })}
            </List.Content>
          </List.Item>
        )}
      </List>
    </Grid>
  );
}

export default connect(
  {
    outputs: state`app.predictOutputs`
  },
  function PredictionResults({ outputs }) {
    const outputLength = outputs.length;
    if (outputLength === 0) {
      return <div />;
    }
    if (outputLength === 1) {
      const output = head(outputs);
      return <PredictionResultsOne showImage compcat={false} {...output} />;
    }
    const input = head(outputs).input;
    const containerProps = { fluid: false, text: true };
    if (outputLength > 2) {
      containerProps.fluid = true;
      containerProps.text = false;
    }
    return (
      <Container {...containerProps}>
        <Grid.Row divided textAlign="center">
          <Image centered size="medium" shape="rounded" src={input} />
        </Grid.Row>
        <Divider hidden />
        <Grid
          celled="internally"
          divided="vertically"
          padded="vertically"
          columns={outputs.length}
        >
          <Grid.Row centered>
            {outputs.map(output =>
              <Grid.Column key={yeast()}>
                <Segment>
                  <div style={{ marginTop: 10, marginBottom: 10 }}>
                    <Header textAlign="center" as="h3">
                      {output.model.name} Model
                    </Header>
                    <Divider hidden />
                    <PredictionResultsOne
                      showImage={false}
                      compact={true}
                      {...output}
                    />
                  </div>
                </Segment>
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
);
