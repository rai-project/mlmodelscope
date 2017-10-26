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
  List,
  Checkbox,
  Dropdown
} from "semantic-ui-react";

import UploadArea from "../UploadArea";
import { Selector as ModelSelector } from "../Model";
const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

const trace_options = [
  { key: 0, text: "NO_TRACE", value: "NO_TRACE" },
  { key: 1, text: "FRAMEWORK_TRACE", value: "FRAMEWORK_TRACE" },
  { key: 2, text: "CPU_ONLY_TRACE", value: "CPU_ONLY_TRACE" },
  { key: 3, text: "HARDWARE_TRACE", value: "HARDWARE_TRACE" },
  { key: 4, text: "FULL_TRACE", value: "FULL_TRACE" }
];

export default connect(
  {
    predictInputs: state`app.predictInputs`,
    isPredicting: state`app.status.isPredicting`,
    selectedModels: state`models.selectedModels`,
    device: state`app.device`,
    traceLevel: state`app.traceLevel`,
    predictInputsSet: signal`app.predictInputsSet`,
    predictURLChanged: signal`app.predictURLChanged`,
    predictURLAdded: signal`app.predictURLAdded`,
    batchSizeChanged: signal`app.batchSizeChanged`,
    deviceChanged: signal`app.deviceChanged`,
    traceLevelChanged: signal`app.traceLevelChanged`,
    inferenceButtonClicked: signal`app.inferenceButtonClicked`
  },
  function HomePage({
    predictInputs,
    isPredicting,
    selectedModels,
    device,
    predictInputsSet,
    predictURLAdded,
    predictURLChanged,
    batchSizeChanged,
    deviceChanged,
    traceLevelChanged,
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
          <Grid>
            <Grid.Row centered columns={1}>
              <ModelSelector open />
            </Grid.Row>
            <Grid.Row centered columns={3}>
              <Grid.Column>
                <Input
                  fluid
                  placeholder={"Batch Size (default: 1)"}
                  onChange={e =>
                    batchSizeChanged({ batchSize: e.target.value })}
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Trace Level (default: FULL_TRACE)"
                  fluid
                  selection
                  options={trace_options}
                  onChange={(e, { value }) => {
                    traceLevelChanged({ traceLevel: value });
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Checkbox
                  toggle
                  label="Use GPU"
                  checked={device === "GPU"}
                  onChange={e => {
                    if (device === "GPU") {
                      deviceChanged({ device: "CPU" });
                    } else {
                      deviceChanged({ device: "GPU" });
                    }
                  }}
                />
              </Grid.Column>
            </Grid.Row>
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
                              "http://ww4.hdnux.com/photos/41/15/35/8705883/4/920x920.jpg"
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
                    render: () => (
                      <UploadArea onUploadSuccess={onUploadSuccess} />
                    )
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
                  disabled={Object.keys(selectedModels).length === 0}
                  onClick={e => {
                    if (predictInputs.length === 0) {
                      predictURLAdded();
                    }
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
          </Grid>
        </Container>
      </div>
    );
  }
);
