import "./ExperimentSetupSider.css";
import React, { Component } from "react";
import { Layout, Menu, InputNumber, Select, Tag } from "antd";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { ExperimentContext } from "../../../context/ExperimentContext";
import predict from "../../../helpers/predict";
import yeast from "yeast";

const { Sider } = Layout;
const { Option } = Select;

const trace_options = [
  { key: 0, text: "None", value: "NO_TRACE" },
  { key: 1, text: "Step", value: "STEP_TRACE" },
  { key: 2, text: "Framework", value: "FRAMEWORK_TRACE" },
  { key: 3, text: "CPU", value: "CPU_ONLY_TRACE" },
  { key: 4, text: "Hardware", value: "HARDWARE_TRACE" },
  { key: 5, text: "Full", value: "FULL_TRACE" },
];

export default class ExperimentSetupSider extends Component {
  handleClose(context, index) {
    context.removeModel(index);
  }

  handleClick(context, key) {
    if (key === "predict" && context.imageUrls.length !== 0) {
      predict(
        context.imageUrls,
        context.models,
        context.frameworks,
        context.batchSize,
        context.traceLevel
      ).then(result => context.setPredictResult(result));
      console.log(context);
    }
    this.props.onPageChange(key);
  }

  render() {
    return (
      <Sider width="300" style={{ width: "30%", background: "#E8E9EB" }}>
        <div className="Experiment-setup-title-bar Experiment-setup-sider-bar">
          <h3 style={{ color: "white" }}>EXPERIMENT SETUP</h3>
        </div>

        <ExperimentContext.Consumer>
          {context => (
            <Menu
              mode="inline"
              selectedKeys={[this.props.current]}
              style={{ border: 1, backgroundColor: "#E8E9EB" }}
              onClick={e => this.handleClick(context, e.key)}
            >
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
                <div>DATASETS</div>
                {context.imageUrls.length !== 0 && <Tag closable>Import from URLs</Tag>}
                {context.dataset.length !== 0 && <Tag closable>{context.dataset[0].name}</Tag>}
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
                <div>MODELS</div>
                {context.models.map((model, index) => (
                  <div key={yeast()}>
                    <Tag
                      closable
                      style={{ zIndex: 1 }}
                      onClose={() => this.handleClose(context, index)}
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
                  height: "auto",
                }}
              >
                <div>FRAMEWORKS</div>
                {context.frameworks.map((framework, index) => (
                  <div key={yeast()}>
                    <Tag
                      closable
                      style={{ zIndex: 1 }}
                      onClose={() => context.removeFramework(index)}
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
                  height: "auto",
                }}
              >
                <div>MACHINES</div>
              </Menu.Item>
            </Menu>
          )}
        </ExperimentContext.Consumer>

        <div style={{ paddingLeft: "24px" }}>
          <div style={{ display: "inline-block" }}>Batch Size: </div>
          <div style={{ marginLeft: "40px", display: "inline-block" }}>
            <ExperimentContext.Consumer>
              {context => (
                <InputNumber
                  min={1}
                  max={10}
                  value={context.batchSize}
                  onChange={value => context.setBatchSize(value)}
                />
              )}
            </ExperimentContext.Consumer>
          </div>
        </div>

        <div style={{ paddingLeft: "24px", marginTop: "30px" }}>
          <div style={{ display: "inline-block" }}>Trace Level: </div>
          <div style={{ marginLeft: "40px", display: "inline-block" }}>
            <ExperimentContext.Consumer>
              {context => (
                <Select
                  showSearch
                  style={{ width: 100 }}
                  value={context.traceLevel}
                  optionFilterProp="children"
                  onChange={value => context.changeTraceLevel(value)}
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
              )}
            </ExperimentContext.Consumer>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <ExperimentContext.Consumer>
            {context => (
              <PrimaryButton
                style={{ width: "100%" }}
                text={"Next Step: " + this.props.future.toUpperCase()}
                onClick={() => this.handleClick(context, this.props.future)}
              />
            )}
          </ExperimentContext.Consumer>
        </div>
      </Sider>
    );
  }
}
