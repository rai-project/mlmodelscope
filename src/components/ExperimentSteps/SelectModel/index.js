import SelectableCard from "../SelectableCard/index";
import React, { Component } from "react";
import { Col, Row, Layout, Icon, Divider, Dropdown, Menu, Tag } from "antd";
import yeast from "yeast";
import semver from "semver";
import { capitalize, remove, indexOf } from "lodash";
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
import { ModelManifests } from "../../../swagger";
import { ExperimentContext } from "../../../context/ExperimentContext";

const { Content } = Layout;
const inputDataTypes = {
  "image": { "icon": "picture" },
  "text": { "icon": "file-text" },
  "audio": { "icon": "sound" },
};
const outputDataTypes = {
  "UNKNOWN": { "icon": "question" },
  "IMAGE": { "icon": "picture" },
  "CLASSIFICATION": { "icon": "appstore" },
  "GEOLOCATION": { "icon": "compass" },
  "REGION": { "icon": "global" },
  "TEXT": { "icon": "file-text" },
  "AUDIO": { "icon": "sound" },
  "BOUNDINGBOX": { "icon": "border" },
  "RAW": { "icon": "file-text" },
}

function typeRender({ type }) {
  if (type in inputDataTypes) {
    return <Icon key={yeast()} type={inputDataTypes[type]["icon"]} />;
  } else if (type in outputDataTypes) {
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

        // START: For Segmentation Demo
        const segModel = {
          description: "TODO",
          framework: { name: "Tensorflow", version: "1.12" },
          inputs:[{ type: "image" }],
          name: "SSD_MobileNet",
          output: { type: "BOUNDINGBOX" },
          version: "1.0"
        }
        req.manifests.unshift(segModel)
        // END

        this.props.context.setModelManifests(req.manifests);
        this.setState({ loaded: true });
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
    this.props.context.addModel(model.name, model.version);
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
      console.log(t);
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

  render() {
    if (!isArray(this.props.context.modelManifests)) {
      return <div />;
    }

    var models = this.props.context.modelManifests;
    const selectedFrameworks = this.props.context.frameworks;
    if (selectedFrameworks.length !== 0) {
      // find models with selected frameworks
      models = filter(models, function(o) {
        return findIndex(selectedFrameworks, o.framework) !== -1;
      });
      models = filter(models, function(m) {
        return (
          size(
            filter(models, function(o) {
              return m.name === o.name && versionSatisfied(m.version, o.version);
            })
          ) === selectedFrameworks.length
        );
      });
    }

    models = uniqBy(models, e => e.name + e.version);

    // console.log(models);
    // console.log(this.state);

    const inputDataTypeMenu = (
      <Menu onClick={this.handleSelectInputDataType}>
        {Object.keys(inputDataTypes).map(type => (
          <Menu.Item key={type}>
            <a // eslint-disable-line
              target="_blank"
              rel="noopener noreferrer"
            >
              {capitalize(type)}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    );

    const outputDataTypeMenu = (
      <Menu onClick={this.handleSelectOutputDataType}>
        {Object.keys(outputDataTypes).map(type => (
          <Menu.Item key={type}>
            <a // eslint-disable-line
              target="_blank"
              rel="noopener noreferrer"
            >
              {capitalize(type)}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    );

    const modelsKey = keys(models).sort();
    this.models = models;
    this.modelsKey = modelsKey;

    return (
      <Layout style={{ background: "#E8E9EB", margin: "0px 20px 120px 20px" }}>
        <Content>
          <div
            style={{
              background: "#1A263A",
              color: "white",
              paddingTop: "30px",
              paddingBottom: "60px",
            }}
          >
            <h2 style={{ marginTop: "60px", marginLeft: "40px", color: "white" }}>
              Select a model
            </h2>
          </div>

          <div
            style={{
              paddingTop: "20px",
              paddingLeft: "40px",
              backgroundColor: "#131C2D",
              height: "60px",
              color: "white",
            }}
          >
            <div style={{ display: "inline-block" }}>
              <Dropdown overlay={inputDataTypeMenu}>
                <a // eslint-disable-line
                  style={{ color: "white" }}
                >
                  Input Data Type <Icon type="caret-down" theme="outlined" />
                </a>
              </Dropdown>
            </div>

            <div style={{ marginLeft: "40px", display: "inline-block" }}>
              <Dropdown overlay={outputDataTypeMenu}>
                <a // eslint-disable-line
                  style={{ color: "white" }}
                >
                  Output Data Type <Icon type="caret-down" theme="outlined" />
                </a>
              </Dropdown>
            </div>
          </div>

          <div style={{ paddingTop: "20px", paddingBottom: "20px", paddingLeft: "40px" }}>
            Input Data Type:
            {this.state.selectedInputDataType.length === 0 ? (
              <Tag style={{ marginLeft: "20px" }}>ALL</Tag>
            ) : (
              this.renderSelectedInputFlags()
            )}
          </div>
          <div style={{ paddingTop: "20px", paddingBottom: "20px", paddingLeft: "40px" }}>
            Output Data Type:
            {this.state.selectedOutputDataType.length === 0 ? (
              <Tag style={{ marginLeft: "20px" }}>ALL</Tag>
            ) : (
              this.renderSelectedOutputFlags()
            )}
          </div>

          <Row gutter={16} type="flex" justify="space-around" align="middle">
            {modelsKey.map(key => {
              const model = models[key];
              // console.log(model);
              const isSelected = !isNil(
                find(
                  this.props.context.models,
                  e => e.name === model.name && versionSatisfied(e.version, model.version)
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
                  indexOf(this.state.selectedInputDataType, model.inputs[0].type) >= 0) &&
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
                        <Col span={8}>
                          ({map(model.inputs, typeRender)}) → {typeRender(model.output)}
                        </Col>

                        <Col span={8} offset={8}>
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
