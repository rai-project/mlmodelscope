import React from "react";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { Container, Grid, Divider, Button, Input } from "semantic-ui-react";

import UploadArea from "../UploadArea";
import { Selector as ModelSelector } from "../Model";
const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    model: state`models.currentModel`,
    inferenceUrl: state`app.inferenceUrl`,
    isPredicting: state`app.isPredicting`,
    inferenceUrlChanged: signal`app.inferenceUrlChanged`,
    infrenceButtonClicked: signal`app.infrenceButtonClicked`
  },
  function HomePage({
    model,
    inferenceUrl,
    isPredicting,
    inferenceUrlChanged,
    infrenceButtonClicked
  }) {
    return (
      <div>
        <Container
          text
          style={{
            fontFamily
          }}
        >
          <Grid.Row centered columns={1}>
            <UploadArea />
          </Grid.Row>
          <Divider horizontal />
          <Grid.Row centered columns={1}>
            <ModelSelector />
          </Grid.Row>
          <Divider horizontal />
          <Grid.Row centered columns={1}>
            <Input
              fluid
              placeholder={
                inferenceUrl ||
                "https://static.pexels.com/photos/20787/pexels-photo.jpg"
              }
              onChange={e =>
                inferenceUrlChanged({ inferenceURL: e.target.value })}
            />
          </Grid.Row>
          <Grid.Row centered columns={1} style={{ paddingTop: "2em" }}>
            <Container textAlign="center">
              <Button
                as="a"
                size="massive"
                style={{
                  color: "white",
                  backgroundColor: "#0DB7C4",
                  borderColor: "#0DB7C4"
                }}
                onClick={e => {
                  infrenceButtonClicked({ model: model });
                }}
                loading={isPredicting === true}
              >
                Infer
              </Button>
            </Container>
          </Grid.Row>
        </Container>
      </div>
    );
  }
);
