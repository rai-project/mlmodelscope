import yeast from "yeast";
import React from "react";
import { connect } from "@cerebral/react";
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
  showModel = true,
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
      {showImage ? (
        <div>
          <Grid.Row divided textAlign="center">
            <Image centered size="medium" shape="rounded" src={input} />
          </Grid.Row>
          <Divider hidden />
        </div>
      ) : null}
      {showModel ? (
        <div>
          <Grid.Row divided textAlign="center">
            <Header textAlign="center" as="h3">
              {model.name} Model
            </Header>
            <Header textAlign="center" as="h5">
              {model.framework.name} {model.framework.version}
            </Header>
          </Grid.Row>
          <Divider hidden />
        </div>
      ) : null}
      <List divided>
        {features.map(features => (
          <List.Item key={yeast()}>
            <List.Content>
              {makeFeatureTag({
                feature: features,
                key: "feature-" + yeast(),
                compact: compact
              })}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Grid>
  );
}

export default connect(
  {
    inputs: state`app.predictInputs`,
    models: state`models.selectedModels`,
    outputs: state`app.predictOutputs`
  },
  function PredictionResults({ inputs, models, outputs }) {
    const outputLength = outputs.length;
    if (outputLength === 0) {
      return <div />;
    }
    const containerProps = { fluid: false, text: true };
    if (outputLength > 2) {
      containerProps.fluid = true;
      containerProps.text = false;
    }
    const output = head(outputs);
    const model = head(models);
    return (
      <Container {...containerProps}>
        {inputs.length === 1 ? (
          <div>
            <Grid.Row divided textAlign="center">
              <Image
                centered
                size="medium"
                shape="rounded"
                src={output.input}
              />
            </Grid.Row>
            <Divider hidden />
          </div>
        ) : null}
        {models.length === 1 ? (
          <div>
            <Grid.Row divided textAlign="center">
              <Header textAlign="center" as="h1">
                {model.name} Model
              </Header>
              <Header textAlign="center" as="h3">
                {model.framework.name} {model.framework.version}
              </Header>
            </Grid.Row>
            <Divider hidden />
          </div>
        ) : null}
        <Grid
          celled="internally"
          divided="vertically"
          padded="vertically"
          columns={outputs.length}
        >
          <Grid.Row centered>
            {outputs.map(output => (
              <Grid.Column key={yeast()}>
                <Segment>
                  <div style={{ marginTop: 10, marginBottom: 10 }}>
                    <PredictionResultsOne
                      showImage={inputs.length > 1}
                      showModel={models.length > 1}
                      compact={true}
                      {...output}
                    />
                  </div>
                </Segment>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
);
