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
    predictInputs: state`app.predictInputs`,
    isPredicting: state`app.isPredicting`,
    selectedModels: state`models.selectedModels`,
    predictURLChanged: signal`app.predictURLChanged`,
    inferenceButtonClicked: signal`app.inferenceButtonClicked`
  },
  function HomePage({
    predictInputs,
    isPredicting,
    selectedModels,
    predictURLChanged,
    inferenceButtonClicked
  }) {
    const onUploadSuccess = files => {
      console.log("got onUploadSuccess files = ", files);
      const uploadURLs = values(files).map(file => file.uploadURL);
      console.log("got onUploadSuccess fileNames = ", uploadURLs);
      const firstURL = head(uploadURLs);
      console.log({
        selectedModels,
        firstURL
      });
      predictURLChanged({ inputs: firstURL });
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
                        predictInputs || [
                          "https://static.pexels.com/photos/20787/pexels-photo.jpg"
                        ]
                      }
                      onChange={e => {
                        let url = [e.target.value];
                        predictURLChanged({ inputs: url });
                      }}
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
                disabled={!isObject(selectedModels)}
                onClick={e => {
                  inferenceButtonClicked({ selectedModels: selectedModels });
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
