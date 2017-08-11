import React from "react";
import { connect } from "cerebral/react";
import { state, signal } from "cerebral/tags";
import { head, isObject, values } from "lodash";
import {
  Container,
  Grid,
  Divider,
  Button,
  Input,
  Loader,
  Tab
} from "semantic-ui-react";

import UploadArea from "../UploadArea";
import { Selector as ModelSelector } from "../Model";
const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    model: state`models.currentModel`,
    predictURL: state`app.predictURL`,
    isPredicting: state`app.isPredicting`,
    currentModel: state`models.currentModel`,
    predictURLChanged: signal`app.predictURLChanged`,
    infrenceButtonClicked: signal`app.infrenceButtonClicked`
  },
  function HomePage({
    model,
    predictURL,
    isPredicting,
    currentModel,
    predictURLChanged,
    infrenceButtonClicked
  }) {
    const onUploadSuccess = files => {
      console.log("got onUploadSuccess files = ", files);
      const uploadURLs = values(files).map(file => file.uploadURL);
      console.log("got onUploadSuccess fileNames = ", uploadURLs);
      const firstURL = head(uploadURLs);
      console.log({
        firstURL,
        model
      });
      predictURLChanged({ predictURL: firstURL });
      infrenceButtonClicked({ model: model });
    };
    return (
      <div>
        <Container
          text
          style={{
            fontFamily
          }}
        >
          <Grid.Row centered columns={1}>
            <ModelSelector open />
          </Grid.Row>
          <Divider horizontal />
          <Grid.Row centered columns={1}>
            <Tab
              menu={{ secondary: true, pointing: true }}
              panes={[
                {
                  menuItem: "URL",
                  render: () =>
                    <Input
                      fluid
                      placeholder={
                        predictURL ||
                        "https://static.pexels.com/photos/20787/pexels-photo.jpg"
                      }
                      onChange={e =>
                        predictURLChanged({ predictURL: e.target.value })}
                    />
                },
                {
                  menuItem: "Upload",
                  render: () => <UploadArea onUploadSuccess={onUploadSuccess} />
                },
                {
                  menuItem: "Dataset",
                  render: () => <div>TODO</div>
                }
              ]}
            />
          </Grid.Row>
          <Divider horizontal />
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
                disabled={!isObject(currentModel)}
                onClick={e => {
                  infrenceButtonClicked({ model: model });
                }}
              >
                {isPredicting === true
                  ? <Loader active inline inverted>
                      Predicting
                    </Loader>
                  : "Predict"}
              </Button>
            </Container>
          </Grid.Row>
        </Container>
      </div>
    );
  }
);
