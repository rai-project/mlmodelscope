import "./Conference.css";
import React, { Component } from "react";
import { Steps, Row, Col, Select, Upload, Icon } from 'antd';
import PrimaryButton from "../Buttons/PrimaryButton";

const Option = Select.Option;

export default class ConferenceUploadPage extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      current_step: 0,
      selected_conference: null,
      selected_paper: null,
    }
    this.handleChangeConference = this.handleChangeConference.bind(this);
    this.handleChangePaper = this.handleChangePaper.bind(this);
  }

  handleChangeConference(value) {
    console.log(value);
    this.setState({current_step: 1, selected_conference: value});
  }

  handleChangePaper(value) {
    console.log(value);
    this.setState({current_step: 2, selected_paper: value});
  }

  renderMainPanel() {
    console.log(this.state)
    const conferenceSelect = <Select
      id="conferenceSelect"
      showSearch
      style={{ width: "100%" }}
      placeholder="Select a Conference"
      onSelect = {this.handleChangeConference}
      optionFilterProp="children"
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      <Option value="ICML">ICML</Option>
      <Option value="NIPS">NIPS</Option>
      <Option value="CVPR">CVPR</Option>
    </Select>

    const paperSelect = <Select
      id="paperSelect"
      showSearch
      style={{ width: "100%" }}
      placeholder="Select a Paper"
      value={undefined}
      onChange = {this.handleChangePaper}
      optionFilterProp="children"
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      <Option value="Paper1">Paper1</Option>
      <Option value="Paper2">Paper2</Option>
      <Option value="Paper3">Paper3</Option>
    </Select>

    switch (this.state.current_step) {
      case 0:
        return(
          <div style={{ width: "20%", marginLeft: "40%", marginTop: "40px" }}>
            {conferenceSelect}
          </div>
        )
      case 1:
        return(
          <div style={{ width: "20%", marginLeft: "40%", marginTop: "40px" }}>
            {paperSelect}
          </div>
        )
      case 2:
        return(
          <div style={{ width: "40%", marginLeft: "30%", marginTop: "40px" }}>
            <Upload.Dragger>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Upload.Dragger>
            <PrimaryButton style={{ float: "right", marginTop: "20px", width: "30%" }} text="Upload"/>
          </div>
        )
    }
  }

  render() {
    return(
      <React.Fragment>
        <div className="step-bar">
          <Steps current={this.state.current_step}>
            <Steps.Step title="Conference"
              description={
                this.state.selected_conference === null ?
                "Select The Conference" : this.state.selected_conference
              }
            />
            <Steps.Step title="Paper" description={
              this.state.selected_paper === null ?
              "Select The Paper" : this.state.selected_paper
              }
            />
            <Steps.Step title="Upload" description="Upload Your Model" />
          </Steps>
        </div>
        {this.renderMainPanel()}
        
      </React.Fragment>
    )
  }
}