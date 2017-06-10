import React, { Component } from "react";
import yeast from "yeast";
import { state, signal } from "cerebral/tags";
import {
  Image,
  Progress,
  Grid,
  Container,
  Segment,
  Divider
} from "semantic-ui-react";

export default connect(
  {
    featureList: state`models.model.features`
  },
  function Features({ featureList }) {
    featureList = featureList.slice(0, 5);
    const top = featureList[0];
    const rest = featureList.slice(1);

    return (
      <Container>
        <Grid.Row divided>
          <Image src="https://www.timaru.govt.nz/__data/assets/image/0006/17889/dog.jpg" />
        </Grid.Row>
        <Divider hidden />
        <Grid.Row>
          <Segment size={"large"}>
            <Grid columns={3}>
              <Grid.Column textAlign="center" width={2}>
                {top.name}
              </Grid.Column>
              <Grid.Column width={8}>
                <Progress
                  value={top.prob}
                  total={1}
                  size="tiny"
                  color={top.prob > 0.8 ? "green" : "orange"}
                />
              </Grid.Column>
              <Grid.Column textAlign="right" width={2}>
                {top.prob}
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Row>
        <Divider horizontal />
        <Grid.Row>
          {rest.map(feature =>
            <Grid columns={3} key={"feature-" + yeast()}>
              <Grid.Column textAlign="center" width={2}>
                {feature.name}
              </Grid.Column>
              <Grid.Column width={8}>
                <Progress
                  value={feature.prob}
                  total={1}
                  size="tiny"
                  color={feature.prob > 0.8 ? "green" : "orange"}
                />
              </Grid.Column>
              <Grid.Column textAlign="right" width={2}>
                {feature.prob}
              </Grid.Column>
            </Grid>
          )}
        </Grid.Row>
      </Container>
    );
  }
);
