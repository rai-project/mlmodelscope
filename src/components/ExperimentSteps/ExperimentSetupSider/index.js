import "./ExperimentSetupSider.css";
import React, { Component } from "react";
import { Layout, Menu, InputNumber, Select, Tag, Switch, Icon } from "antd";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { ExperimentContext } from "../../../context/ExperimentContext";
import predict from "../../../helpers/predict";
import yeast from "yeast";

const { Sider } = Layout;
const { Option } = Select;

const trace_options = [
  { key: 0, text: "None", value: "NO_TRACE" },
  { key: 1, text: "Application", value: "APPLICATION_TRACE" },
  { key: 2, text: "Model", value: "MODEL_TRACE" },
  { key: 3, text: "Framework", value: "FRAMEWORK_TRACE" },
  { key: 4, text: "Library", value: "LIBRARY_TRACE" },
  { key: 5, text: "Hardware", value: "HARDWARE_TRACE" },
  { key: 6, text: "Full", value: "FULL_TRACE" }
];

class ExperimentSetupSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  handleClose(context, index) {
    context.removeModel(index);
  }

  handleClick(context, key) {
    if (key === "predict" && context.imageUrls.length !== 0) {
      context.setPredictResult(null);
      predict(
        context.imageUrls,
        context.models,
        context.frameworks,
        context.batchSize,
        context.traceLevel,
        context.useGPU
      ).then(result => context.setPredictResult(result));
      console.log(context);
    }
    this.props.onPageChange(key);
  }

  handleClickResult() {
    this.props.onPageChange("predict");
  }

  disableButton() {
    if (this.props.future === "predict") {
      if (
        this.props.context.imageUrls.length === 0 &&
        this.props.context.dataset.length === 0 ||
        this.props.context.models.length === 0 ||
        this.props.context.frameworks.length === 0
      ) {
        return true
      }
    }
    return false
  }

  disableResultButton() {
    if (this.props.context.result === null) {
      return true
    }
    return false
  }

  render() {
    console.log(this.props.context);
    return (
      <Sider
      width="300"
      style={{ width: "30%", background: "#E8E9EB" }}
      collapsible
      // collapsed={this.state.collapsed}
      collapsedWidth={0}
      // trigger={<Icon
      //   type='menu-unfold'
      //   onClick={() => this.setState({collapsed: !this.state.collapsed})}
      // />}
      >
        <div className="Experiment-setup-title-bar Experiment-setup-sider-bar">
          <h3 style={{ color: "white" }}>EXPERIMENT SETUP</h3>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[this.props.current]}
          style={{ border: 1, backgroundColor: "#E8E9EB" }}
          onClick={e => this.handleClick(this.props.context, e.key)}
        >
          <Menu.Item
            key="dataset"
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              paddingleft: "40px",
              minHeight: "60px",
              height: "auto"
            }}
          >
            <div>DATASETS</div>
            {this.props.context.imageUrls.length !== 0 && (
              <Tag closable>Import from URLs</Tag>
            )}
            {this.props.context.dataset.length !== 0 && (
              <Tag closable>{this.props.context.dataset[0].name}</Tag>
            )}
          </Menu.Item>

          <Menu.Item
            key="model"
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              paddingleft: "40px",
              minHeight: "60px",
              height: "auto"
            }}
          >
            <div>MODELS</div>
            {this.props.context.models.map((model, index) => (
              <div key={yeast()}>
                <Tag
                  closable
                  style={{ zIndex: 1 }}
                  onClose={() => this.handleClose(this.props.context, index)}
                >
                  {model.name + " v" + model.version}
                </Tag>
              </div>
            ))}
          </Menu.Item>

          <Menu.Item
            key="framework"
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              paddingleft: "40px",
              minHeight: "60px",
              height: "auto"
            }}
          >
            <div>FRAMEWORKS</div>
            {this.props.context.frameworks.map((framework, index) => (
              <div key={yeast()}>
                <Tag
                  closable
                  style={{ zIndex: 1 }}
                  onClose={() => this.props.context.removeFramework(index)}
                >
                  {framework.name + " v" + framework.version}
                </Tag>
              </div>
            ))}
          </Menu.Item>

          <Menu.Item
            key="machine"
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              paddingleft: "40px",
              minHeight: "60px",
              height: "auto"
            }}
          >
            <div>MACHINES</div>
            {this.props.context.machines.map((machine, index) => (
              <div key={yeast()}>
                <Tag
                  closable
                  style={{ zIndex: 1 }}
                  onClose={() => this.props.context.removeMachine(index)}
                >
                  {machine.name}
                </Tag>
              </div>
            ))}
          </Menu.Item>
        </Menu>

        <div style={{ paddingLeft: "24px", marginTop: "30px" }}>
          <div style={{ display: "inline-block" }}>Using GPU: </div>
          <div
            style={{
              float: "right",
              marginRight: "20%",
              display: "inline-block"
            }}
          >
            <Switch
              defaultUnChecked
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              onChange={checked => this.props.context.setUseGPU(checked)}
            />
          </div>
        </div>

        <div style={{ paddingLeft: "24px", marginTop: "30px" }}>
          <div style={{ display: "inline-block" }}>Batch Size: </div>
          <div
            style={{
              float: "right",
              marginRight: "20%",
              display: "inline-block"
            }}
          >
            <InputNumber
              min={1}
              max={10}
              value={this.props.context.batchSize}
              onChange={value => this.props.context.setBatchSize(value)}
            />
          </div>
        </div>

        <div style={{ paddingLeft: "24px", marginTop: "30px" }}>
          <div style={{ display: "inline-block" }}>Trace Level: </div>
          <div
            style={{
              float: "right",
              marginRight: "20%",
              display: "inline-block"
            }}
          >
            <Select
              showSearch
              style={{ width: 100 }}
              value={this.props.context.traceLevel}
              optionFilterProp="children"
              onChange={value => this.props.context.changeTraceLevel(value)}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {trace_options.map(option => (
                <Option key={yeast()} value={option.value}>
                  {option.text}
                </Option>
              ))}
            </Select>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <PrimaryButton
            disabled={this.disableButton()}
            style={{ width: "100%" }}
            text={"Next Step: " + this.props.future.toUpperCase()}
            onClick={() =>
              this.handleClick(this.props.context, this.props.future)
            }
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          <PrimaryButton
            disabled={this.disableResultButton()}
            style={{ width: "100%" }}
            text={"Result"}
            onClick={() => this.handleClickResult()}
          />
        </div>
      </Sider>
    );
  }
}

export default props => (
  <ExperimentContext.Consumer>
    {context => <ExperimentSetupSider {...props} context={context} />}
  </ExperimentContext.Consumer>
);
