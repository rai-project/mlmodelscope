import React from "react";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import {
  Container,
  Grid,
  Divider,
  Button,
  Form,
  Checkbox
} from "semantic-ui-react";

import UploadArea from "../UploadArea";
import ModelSelector from "../ModelSelector";
const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    models: state`models.currentModel`,
    url: state`app.url`,
    urlChanged: signal`app.urlChanged`,
    modelInferRequest: signal`app.modelInferRequest`
  },
  function Home({ models, url, urlChanged, modelInferRequest }) {
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
            <Form>
              <Form.Field>
                <input
                  placeholder="Image URL"
                  onChange={e => urlChanged({ url: e.target.value })}
                />
              </Form.Field>
              <Button
                type="submit"
                floated="right"
                color="teal"
                disabled={!(models && url)}
                onClick={modelInferRequest}
              >
                Infer
              </Button>
            </Form>
          </Grid.Row>

        </Container>
      </div>
    );
  }
);
