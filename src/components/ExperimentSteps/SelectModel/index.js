import SelectableCard from "../SelectableCard/index";
import React, { Component } from "react";
import { Col, Row, Layout, Icon, Divider, Dropdown, Menu, Tag, Checkbox } from "antd";
import yeast from "yeast";
import semver from "semver";
import { capitalize, remove, indexOf, orderBy, lowerCase, upperCase } from "lodash";
import { withRouter } from "react-router-dom";
import {
  map,
  isArray,
  keys,
  uniqBy,
  filter,
  find,
  findIndex,
  isNil,
  truncate,
  size,
} from "lodash";
import { ModelManifests, FrameworkManifests } from "../../../swagger";
import { ExperimentContext } from "../../../context/ExperimentContext";
import ExperimentContentTitle from "../ExperimentContentTitle";

const { Content } = Layout;
const typeIcons = {
  unknown: { icon: "question" },
  image: { icon: "picture" },
  text: { icon: "file-text" },
  audio: { icon: "sound" },
  classification: { icon: "appstore" },
  geolocation: { icon: "compass" },
  region: { icon: "global" },
  semanticsegment: { icon: "radius-bottomleft" },
  instancesegment: { icon: "border-bottom" },
  text: { icon: "file-text" },
  audio: { icon: "sound" },
  boundingbox: { icon: "border" },
  raw: { icon: "file-text" },
};
const inputDataTypes = {
  image: { icon: "picture" },
  text: { icon: "file-text" },
  audio: { icon: "sound" },
};
const outputDataTypes = {
  UNKNOWN: { icon: "question" },
  IMAGE: { icon: "picture" },
  CLASSIFICATION: { icon: "appstore" },
  GEOLOCATION: { icon: "compass" },
  REGION: { icon: "global" },
  TEXT: { icon: "file-text" },
  AUDIO: { icon: "sound" },
  BOUNDINGBOX: { icon: "border" },
  RAW: { icon: "file-text" },
};

var logos = require.context("../../../resources/logos", true);
function frameworkLogo(frameworkName) {
  let image = logos("./" + frameworkName + ".png");
  return (
    <img
      src={image}
      alt={frameworkName}
      style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
    />
  );
}

function typeRender({ type }) {
  if (lowerCase(type) in typeIcons) {
    type = lowerCase(type);
    return <Icon key={yeast()} type={typeIcons[type]["icon"]} />;
  }
  if (lowerCase(type) in inputDataTypes) {
    type = lowerCase(type);
    return <Icon key={yeast()} type={inputDataTypes[type]["icon"]} />;
  }
  if (upperCase(type) in inputDataTypes) {
    type = upperCase(type);
    return <Icon key={yeast()} type={inputDataTypes[type]["icon"]} />;
  }
  if (lowerCase(type) in outputDataTypes) {
    type = lowerCase(type);
    return <Icon key={yeast()} type={outputDataTypes[type]["icon"]} />;
  }
  if (upperCase(type) in outputDataTypes) {
    type = upperCase(type);
    return <Icon key={yeast()} type={outputDataTypes[type]["icon"]} />;
  }
  return <Icon key={yeast()} type="cluster" />;
}

function versionSatisfied(a0, b0) {
  const a = semver.coerce(a0).raw;
  const b = semver.coerce(b0).raw;
  return semver.satisfies(a, b);
}

class SelectModel extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectInputDataType = this.handleSelectInputDataType.bind(this);
    this.handleSelectOutputDataType = this.handleSelectOutputDataType.bind(this);
    this.handleRemoveInputTag = this.handleRemoveInputTag.bind(this);
    this.handleRemoveOutputTag = this.handleRemoveOutputTag.bind(this);
    this.state = {
      loaded: false,
      selectedInputDataType: [],
      selectedOutputDataType: [],
    };
  }

  async componentDidMount() {
    if (this.props.context.modelManifests == null) {
      try {
        // todo: need to filter based on what is selected
        const req = await ModelManifests({
          frameworkName: "*",
          frameworkVersion: "*",
          modelName: "*",
          modelVersion: "*",
        });

        this.props.context.setModelManifests(req.manifests);
        this.setState({ loaded: true });
      } catch (err) {
        console.error(err);
      }
    }
    if (this.props.context.frameworkManifests === null) {
      try {
        const req = await FrameworkManifests({
          frameworkName: "*",
          frameworkVersion: "*",
        });
        this.props.context.setFrameworkManifests(req.manifests);
      } catch (err) {
        console.error(err);
      }
    }
  }

  handleSelect(isSelected, key) {
    const models = this.models;
    const model = models[key];
    if (isSelected) {
      const index = findIndex(
        this.props.context.models,
        e => e.name === model.name && versionSatisfied(e.version, model.version)
      );
      this.props.context.removeModel(index);
      return;
    }
    this.props.context.addModel(model);
  }

  handleRemoveInputTag(key) {
    console.log(key);
    remove(this.state.selectedInputDataType, function(x) {
      return x === key;
    });
    this.setState({ selectedInputDataType: this.state.selectedInputDataType });
  }

  handleRemoveOutputTag(key) {
    console.log(key);
    remove(this.state.selectedOutputDataType, function(x) {
      return x === key;
    });
    this.setState({ selectedOutputDataType: this.state.selectedOutputDataType });
  }

  handleSelectInputDataType(e) {
    this.setState({
      selectedInputDataType: this.state.selectedInputDataType.concat([e.key]),
    });
  }

  handleSelectOutputDataType(e) {
    this.setState({
      selectedOutputDataType: this.state.selectedOutputDataType.concat([e.key]),
    });
  }

  renderSelectedInputFlags() {
    return this.state.selectedInputDataType.map(t => {
      console.log(t);
      return (
        <Tag
          key={t}
          style={{ marginLeft: "20px" }}
          closable
          onClose={() => this.handleRemoveInputTag(t)}
        >
          {t.toUpperCase()}
        </Tag>
      );
    });
  }

  renderSelectedOutputFlags() {
    return this.state.selectedOutputDataType.map(t => {
      // console.log(t);
      return (
        <Tag
          key={t}
          style={{ marginLeft: "20px" }}
          closable
          onClose={() => this.handleRemoveOutputTag(t)}
        >
          {t.toUpperCase()}
        </Tag>
      );
    });
  }

  handleCheck(e, item, index) {
    // console.log(e.target)
    if (e.target.checked === true) {
      this.props.context.addFramework(item.name, item.version);
      console.log(true);
    } else {
      console.log(false);
      this.props.context.removeFramework(index);
    }
  }

  render() {
    var models = this.props.context.modelManifests;
    var frameworks = this.props.context.frameworkManifests;
    if (!isArray(models) || !isArray(frameworks)) {
      return <div />;
    }
    // console.log(this.props.context);

    // Filter by selected framework
    const selectedFrameworks = this.props.context.frameworks;
    if (selectedFrameworks.length !== 0) {
      // find models with selected frameworks
      models = filter(models, function(o) {
        return findIndex(selectedFrameworks, o.framework) !== -1;
      });
    }
    // Filter by selected task
    var selectedTask = this.props.context.task;
    if (selectedTask !== null) {
      models = filter(models, function(o) {
        return (
          o.inputs[0].type === selectedTask.input && o.output.type === selectedTask.output
        );
      });
    }

    // Sort by model name to make sure the same model will showup side by side
    models = orderBy(models, ["name", "version"]);

    const modelsKey = keys(models).sort();
    this.models = models;
    this.modelsKey = modelsKey;

    return (
      <Layout>
        <Content>
          <ExperimentContentTitle text="Select a model" />

          <div style={{ width: "90%", margin: "auto" }}>
            <Row>
              {frameworks.map((item, index) => (
                <Col
                  key={"model-" + index.toString()}
                  sm={4}
                  xs={8}
                  style={{ paddingBottom: "10px", paddingTop: "10px" }}
                >
                  {frameworkLogo(item.name.toLowerCase())}
                  <Checkbox onChange={e => this.handleCheck(e, item, index)}>
                    {item.name + " V" + item.version}
                  </Checkbox>
                </Col>
              ))}
            </Row>

            <Row gutter={16} type="flex" justify="start" align="middle">
              {modelsKey.map(key => {
                const model = models[key];
                // console.log(model);
                const isSelected = !isNil(
                  find(
                    this.props.context.models,
                    e =>
                      e.name === model.name &&
                      versionSatisfied(e.version, model.version) &&
                      e.framework.name === model.framework.name &&
                      versionSatisfied(e.framework.version, model.framework.version)
                  )
                );

                const menu = (
                  <Menu>
                    <Menu.Item>int8</Menu.Item>
                    <Menu.Item>
                      {/* <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    > */}
                      float16
                      {/* </a> */}
                    </Menu.Item>
                    <Menu.Item>float32</Menu.Item>
                  </Menu>
                );

                if (
                  (this.state.selectedInputDataType.length === 0 ||
                    indexOf(this.state.selectedInputDataType, model.inputs[0].type) >=
                      0) &&
                  (this.state.selectedOutputDataType.length === 0 ||
                    indexOf(this.state.selectedOutputDataType, model.output.type) >= 0)
                ) {
                  return (
                    <Col
                      key={`model-${key}`}
                      sm={8}
                      xs={24}
                      style={{ paddingBottom: "10px", paddingTop: "10px" }}
                    >
                      <SelectableCard
                        key={`model-${key}`}
                        title={model.name + " V" + model.version}
                        content={truncate(model.description, {
                          length: 140,
                          separator: " ",
                        })}
                        descriptionTitle={`${model.name} Information`}
                        description={model.description}
                        minHeight="200px"
                        onClick={() => this.handleSelect(isSelected, key)}
                        selected={isSelected}
                      >
                        <Row
                          onClick={e => e.stopPropagation()}
                          type="flex"
                          justify="end"
                          align="bottom"
                          style={{ color: "#aaa", fontSize: "10pt" }}
                        >
                          <Divider orientation="right">
                            <div style={{ color: "#aaa", fontSize: "10pt" }}>Options</div>
                          </Divider>
                          <Col span={4}>
                            {frameworkLogo(model.framework.name.toLowerCase())}
                          </Col>
                          <Col span={8} offset={2}>
                            ({map(model.inputs, typeRender)}) → {typeRender(model.output)}
                          </Col>

                          <Col span={8} offset={2}>
                            <Dropdown overlay={menu}>
                              <>
                                data type <Icon type="down" />
                              </>
                            </Dropdown>
                          </Col>
                        </Row>
                      </SelectableCard>
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(props => (
  <ExperimentContext.Consumer>
    {context => <SelectModel {...props} context={context} />}
  </ExperimentContext.Consumer>
));
