import React from "react";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { Container, Grid, Divider, Label, Input } from "semantic-ui-react";

import UploadArea from "../UploadArea";
import ModelSelector from "../ModelSelector";
const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    inferenceUrl: state`app.inferenceUrl`,
    model: state`models.currentModel`,
    inferenceUrlChanged: signal`app.inferenceUrlChanged`,
    infrenceButtonClicked: signal`app.infrenceButtonClicked`
  },
  function Home({
    model,
    inferenceUrl,
    inferenceUrlChanged,
    infrenceButtonClicked
  }) {
    if (!inferenceUrl) {
      inferenceUrl =
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    }
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
              placeholder="Image URL"
              value={inferenceUrl}
              onChange={e => inferenceUrlChanged({ url: e.target.value })}
            />
          </Grid.Row>
          <Grid.Row centered columns={1} style={{ paddingTop: "2em" }}>
            <Container textAlign="right">
              <Label
                as="a"
                size="massive"
                color="teal"
                onClick={e => {
                  infrenceButtonClicked({ model: model, url: inferenceUrl });
                }}
              >
                Infer
              </Label>
            </Container>
          </Grid.Row>

        </Container>
      </div>
    );
  }
);
