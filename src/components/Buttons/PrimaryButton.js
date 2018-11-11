import './Buttons.css';
import React, { Component } from 'react';
import { Button, Icon } from 'antd';

export default class PrimaryButton extends Component {
  render() {
    return (
      <Button
        type="primary"
        size="large"
        className="PrimaryButton"
        style={this.props.style}
        onClick={this.props.onClick}
        {...this.props}
      >
        {this.props.text}
        <Icon type="right" />
      </Button>
    )
  }
}