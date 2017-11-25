import React from "react";
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import Tour from "reactour";
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
  { key: 0, text: "None", value: "NO_TRACE" },
  { key: 1, text: "Step", value: "STEP_TRACE" },
  { key: 2, text: "Framework", value: "FRAMEWORK_TRACE" },
  { key: 3, text: "CPU", value: "CPU_ONLY_TRACE" },
  { key: 4, text: "Hardware", value: "HARDWARE_TRACE" },
  { key: 5, text: "Full", value: "FULL_TRACE" }
];

const steps = [
  {
    selector: '[data-tut="select-accelerator"]',
    content: "This is my first Step",
    style: {
      "--reactour-accent": "#0db7c4"
    }
  },
  {
    selector: '[data-tut="select-batchsize"]',
    content: "This is my second Step"
  },
  {
    selector: '[data-tut="select-tracelevel"]',
    content: "This is my third Step"
  }
  // ...
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
  class HomePage extends React.Component {
    constructor() {
      super();
      this.state = {
        isTourOpen: false,
        isShowingMore: false
      };
    }

    toggleShowMore = () => {
      this.setState(prevState => ({
        isShowingMore: !prevState.isShowingMore
      }));
    };

    closeTour = () => {
      this.setState({ isTourOpen: false });
    };

    openTour = () => {
      this.setState({ isTourOpen: true });
    };

    onUploadSuccess = files => {
      const { predictInputsSet } = this.props;
      const uploadURLs = values(files).map(file => file.uploadURL);
      predictInputsSet({ predictURLs: uploadURLs });
    };

    render() {
      const {
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
      } = this.props;
      const { isTourOpen, isShowingMore } = this.state;
      return (
        <div>
          <Container
            text
            style={{
              fontFamily
            }}
          >
            <Button h="4" onClick={this.openTour}>
              Show Tutorial
            </Button>
            <Grid>
              <Grid.Row centered columns={1}>
                <ModelSelector open />
              </Grid.Row>
              <Grid.Row centered stretched relaxed>
                <Grid.Column
                  width={4}
                  style={{ paddingLeft: 0, paddingTop: "10px" }}
                >
                  <Checkbox
                    toggle
                    data-tut="select-accelerator"
                    checked={device === "GPU"}
                    label={device === "GPU" ? "Using GPU" : "Using CPU"}
                    onChange={e => {
                      if (device === "GPU") {
                        deviceChanged({ device: "CPU" });
                      } else {
                        deviceChanged({ device: "GPU" });
                      }
                    }}
                  />
                </Grid.Column>
                <Grid.Column width={5}>
                  <Input
                    fluid
                    data-tut="select-batchsize"
                    placeholder={"Batch Size (default: 1)"}
                    onChange={e =>
                      batchSizeChanged({ batchSize: e.target.value })
                    }
                  />
                </Grid.Column>
                <Grid.Column width={7} style={{ paddingRight: 0 }}>
                  <Dropdown
                    selection
                    data-tut="select-tracelevel"
                    options={trace_options}
                    placeholder="Trace Level (default: Full)"
                    onChange={(e, { value }) => {
                      traceLevelChanged({ traceLevel: value });
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
                                predictURLChanged({
                                  predictURL: e.target.value
                                })
                              }
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
                        <UploadArea onUploadSuccess={this.onUploadSuccess} />
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
          <Tour
            steps={steps}
            isOpen={this.state.isTourOpen}
            onRequestClose={this.closeTour}
          />
        </div>
      );
    }
  }
);
