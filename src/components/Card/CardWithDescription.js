import "../ExperimentSteps.css";
import React, { Component } from "react";
import { Card, Tooltip, Icon } from "antd";

export default class CardWithDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || false,
    };
  }

  handleClick() {
    this.setState({ selected: !this.state.selected });
    this.props.onClick();
  }

  render() {
    var item = this.props.item;

    return (
      <Card
        hoverable
        onClick={this.handleClick.bind(this)}
        bordered={this.state.selected}
        style={{ height: this.props.height || "200px", borderColor: "#707070" }}
      >
        <div
          style={{
            paddingTop: "40px",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingBottom: "40px",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <h1>{item.name}</h1>
          </div>
          <div style={{ display: "inline-block", float: "right" }}>
            <Tooltip placement="right" title={item.description}>
              <Icon type="info-circle" theme="outlined" />
            </Tooltip>
          </div>
          <div>Descriptions (eg: Many small, low-resolution images of 100 classes of objects)</div>

          {/* <div style={{marginTop: "20px"}}>
            Instances: 
          </div>

          <div style={{marginTop: "22px"}}>
            Format: 
          </div>

          <div style={{marginTop: "22px"}}>
            Default Task: 
          </div> */}
        </div>
      </Card>
    );
  }
}
