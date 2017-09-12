import React from "react";
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import { values } from "lodash";
import {
  Container,
  Grid,
  Divider,
  Button,
  Input,
  Loader,
  Tab,
  Form,
  List
} from "semantic-ui-react";

import UploadArea from "../UploadArea";
import { Selector as ModelSelector } from "../Model";
const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    predictInputs: state`app.predictInputs`,
    isPredicting: state`app.status.isPredicting`,
    selectedModels: state`models.selectedModels`,
    predictInputsSet: signal`app.predictInputsSet`,
    predictURLChanged: signal`app.predictURLChanged`,
    predictURLAdded: signal`app.predictURLAdded`,
    inferenceButtonClicked: signal`app.inferenceButtonClicked`
  },
  function HomePage({
    predictInputs,
    isPredicting,
    selectedModels,
    predictInputsSet,
    predictURLAdded,
    predictURLChanged,
    inferenceButtonClicked
  }) {
    const onUploadSuccess = files => {
      console.log("got onUploadSuccess files = ", files);
      const uploadURLs = values(files).map(file => file.uploadURL);
      console.log("got onUploadSuccess fileNames = ", uploadURLs);
      predictInputsSet({ predictURLs: uploadURLs });
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
                  render: () => (
                    <div>
                      <Form
                        onSubmit={e => {
                          e.preventDefault();
                          predictURLAdded();
                        }}
                      >
                        <Input
                          fluid
                          placeholder={
                            "https://static.pexels.com/photos/20787/pexels-photo.jpg"
                          }
                          onChange={e =>
                            predictURLChanged({ predictURL: e.target.value })}
                        />
                      </Form>
                      <List>
                        {predictInputs.map((item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        ))}
                      </List>
                    </div>
                  )
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
                disabled={
                  Object.keys(selectedModels).length === 0 ||
                  predictInputs.length === 0
                }
                onClick={e => {
                  inferenceButtonClicked();
                }}
              >
                {isPredicting === true ? (
                  <Loader active inline inverted>
                    Predicting
                  </Loader>
                ) : (
                  "Predict"
                )}
              </Button>
            </Container>
          </Grid.Row>
        </Container>
      </div>
    );
  }
);
