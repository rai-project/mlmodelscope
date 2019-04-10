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
  { key: 6, text: "Full", value: "FULL_TRACE" },
];

class ExperimentSetupSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  handleClose(context, index) {
    context.removeModel(index);
  }

  handleClick(context, key) {
    if (key === "predict" && context.imageUrls.length !== 0) {
      context.startPredicting();
      predict(
        context.imageUrls,
        context.models,
        context.batchSize,
        context.traceLevel,
        context.useGPU
      ).then(result => context.setPredictResult(result));
      console.log(context);
    }
    context.setPage(key)
  }

  handleClickResult() {
    this.props.context.setPage("predict");
  }

  disablePredictButton() {
    if (
      this.props.context.isPredicting ||
      (this.props.context.imageUrls.length === 0 &&
        this.props.context.dataset === null) ||
      this.props.context.models.length === 0 ||
      this.props.context.machines.length === 0
    ) {
      return true;
    }
    return false;
  }

  disableResultButton() {
    if (this.props.context.result === null) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Sider
        width="300"
        style={{ width: "30%" }}
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
          selectedKeys={[this.props.context.currentPage]}
          style={{ border: 1 }}
          onClick={e => this.handleClick(this.props.context, e.key)}
        >
          <Menu.Item
            key="task"
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              paddingleft: "40px",
              minHeight: "60px",
              height: "auto",
            }}
          >
            <div style={{color: this.props.context.currentPage === "task" ? "white" : "black"}}>TASKS</div>
            {this.props.context.task !== null && (
              <Tag>
                {this.props.context.task.name}
              </Tag>
            )}
          </Menu.Item>

          <Menu.Item
            key="model"
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              paddingleft: "40px",
              minHeight: "60px",
              height: "auto",
            }}
          >
            <div style={{color: this.props.context.currentPage === "model" ? "white" : "black"}}>MODELS</div>
            {this.props.context.models.map((model, index) => (
              <div key={yeast()}>
                <Tag
                  closable
                  style={{ zIndex: 1, height: "auto", whiteSpace: "pre-wrap" }}
                  onClose={() => this.handleClose(this.props.context, index)}
                >
                  {model.framework.name + " " + model.name + " v" + model.version}
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
              height: "auto",
            }}
          >
            <div style={{color: this.props.context.currentPage === "machine" ? "white" : "black"}}>MACHINES</div>
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
          <Menu.Item
            key="dataset"
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              paddingleft: "40px",
              minHeight: "60px",
              height: "auto",
            }}
          >
            <div style={{color: this.props.context.currentPage === "dataset" ? "white" : "black"}}>DATASET</div>
            {this.props.context.imageUrls.length !== 0 && (
              <Tag closable onClose={() => this.props.context.removeUrls()}>
                Import from URLs
              </Tag>
            )}
            {this.props.context.dataset !== null && (
              <Tag closable onClose={() => this.props.context.removeDataset()}>
                {this.props.context.dataset.name}
              </Tag>
            )}
          </Menu.Item>
       </Menu>

        <div style={{ paddingLeft: "24px", marginTop: "30px" }}>
          <div style={{ display: "inline-block", color: "white" }}>Using GPU: </div>
          <div
            style={{
              float: "right",
              marginRight: "20%",
              display: "inline-block",
            }}
          >
            <Switch
              // {/*defaultUnChecked*/}
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              onChange={checked => this.props.context.setUseGPU(checked)}
            />
          </div>
        </div>

        <div style={{ paddingLeft: "24px", marginTop: "30px" }}>
          <div style={{ display: "inline-block", color: "white" }}>Batch Size: </div>
          <div
            style={{
              float: "right",
              marginRight: "20%",
              display: "inline-block",
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
          <div style={{ display: "inline-block", color: "white" }}>Trace Level: </div>
          <div
            style={{
              float: "right",
              marginRight: "20%",
              display: "inline-block",
            }}
          >
            <Select
              showSearch
              style={{ width: 100 }}
              value={this.props.context.traceLevel}
              optionFilterProp="children"
              onChange={value => this.props.context.changeTraceLevel(value)}
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
            disabled={this.disablePredictButton()}
            style={{ width: "100%" }}
            text={"Predict"}
            onClick={() => this.handleClick(this.props.context, "predict")}
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
