import './Buttons.css';
import React, { Component } from 'react';
import { Button, Icon } from 'antd';

export default class DisabledButton extends Component {
  render() {
    return(
      <Button
        type="primary"
        size="large"
        className="DisabledButton"
        style={{height: this.props.height, width: this.props.width}}>
        <div style={{marginLeft: "40px", display: "inline-block"}}>
          {this.props.text}
        </div>
        <Icon style={{float:"right", marginRight:"40px", display: "inline-block"}} type="right" />
      </Button>
    )
  }
}