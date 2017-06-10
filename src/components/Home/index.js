import React from "react";
import { Container, Grid, Divider } from "semantic-ui-react";

import UploadArea from "../UploadArea";
import ModelSelector from "../ModelSelector";

const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default function Home() {
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
      </Container>

      <Container
        text
        style={{
          fontFamily
        }}
      />
    </div>
  );
}
