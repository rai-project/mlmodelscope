import "./Conference.css";
import React, { Component } from "react";
import { Steps, Row, Col, Select } from 'antd';

const Option = Select.Option;

export default class ConferenceUploadPage extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      current_step: 0,
      selected_conference: null,
      selected_paper: null,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(value);
    this.setState({current_step: 1, selected_conference: value});
  }

  render() {
    return(
      <React.Fragment>
        <div className="step-bar">
          <Steps current={this.state.current_step}>
            <Steps.Step title="Conference" description="Select The Conference" />
            <Steps.Step title="Paper" description="Select The Paper" />
            <Steps.Step title="Upload" description="Upload Your Model" />
          </Steps>
        </div>
        <div style={{ width: "80%", marginLeft: "10%" }}>
          <Row>
            <Col span={8}>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a Conference"
                onChange = {this.handleChange}
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="ICML">ICML</Option>
                <Option value="NIPS">NIPS</Option>
                <Option value="CVPR">CVPR</Option>
              </Select>
            </Col>
            <Col span={8}>
              <Select
                disabled={this.state.current_step !== 1}
                showSearch
                style={{ width: 200 }}
                placeholder="Select a Paper"
                // onChange = {this.handleChange}
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="Paper1">Paper1</Option>
                <Option value="Paper2">Paper2</Option>
                <Option value="Paper3">Paper3</Option>
              </Select>
            </Col>
            <Col span={8}></Col>
          </Row>
        </div>
        
      </React.Fragment>
    )
  }
}