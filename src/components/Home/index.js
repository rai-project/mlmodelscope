import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import { Container, Grid, Divider, Button } from "semantic-ui-react";

import UploadArea from "../UploadArea";
import ModelSelector from "../ModelSelector";
const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    models: state`models.currentModel`
  },
  function Home({ models }) {
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
            <Button floated="right" color="teal">Infer</Button>
          </Grid.Row>
        </Container>
      </div>
    );
  }
);
