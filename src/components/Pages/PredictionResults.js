import yeast from "yeast";
import React from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import { head, lowerCase, sortBy } from "lodash";
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

function PredictionResultPerImage({
  showImage = true,
  showModel = true,
  compact = false,
  output
}) {
  let model = output.model;
  let len = output.features.length;
  let features = sortBy(output.features, "probability")
    .slice(len - 10, len)
    .reverse();

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
    <Segment>
      {showImage ? (
        <div>
          <Image centered size="medium" shape="rounded" src={output.data} />
          <Divider hidden />
        </div>
      ) : null}
      {showModel ? (
        <div>
          <Header textAlign="center" as="h3">
            {model.name} Model
          </Header>
          <Header textAlign="center" as="h5">
            {model.framework.name} {model.framework.version}
          </Header>
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
    </Segment>
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
            <Image
              centered
              size="medium"
              shape="rounded"
              src={output[0].data}
            />
            <Divider hidden />
          </div>
        ) : null}
        {models.length === 1 ? (
          <div>
            <Header textAlign="center" as="h1">
              {model.name} Model
            </Header>
            <Header textAlign="center" as="h3">
              {model.framework.name} {model.framework.version}
            </Header>
            <Divider hidden />
          </div>
        ) : null}
        <Grid columns={inputs.length} centered divided="vertically">
          {outputs.map(o => (
            <Grid.Row key={yeast()}>
              {o.map(oo => (
                <Grid.Column key={yeast()}>
                  <PredictionResultPerImage
                    showImage={inputs.length > 1}
                    showModel={models.length > 1}
                    compact={true}
                    output={oo}
                  />
                </Grid.Column>
              ))}
            </Grid.Row>
          ))}
        </Grid>
      </Container>
    );
  }
);
