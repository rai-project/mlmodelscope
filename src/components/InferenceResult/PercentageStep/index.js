import React, { Component } from "react";
import {
  Slider, InputNumber, Row, Col,
} from 'antd';

export default class PercentageStep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: props.default * 100,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value) => {
    if (typeof value === "number" && value >= this.props.min && value <= this.props.max) {
      this.props.onChange(value / 100);
      this.setState({inputValue: value});
    }
  }

  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={12}>
          <Slider
            min={this.props.min}
            max={this.props.max}
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={this.props.min}
            max={this.props.max}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
            style={{ marginLeft: 16 }}
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </Col>
      </Row>
    );
  }
}