import React, { Component } from "react";
import { Card } from "antd";

import "./Card.css";

export default class CardWithIcon extends Component {
  constructor(props) {
    super(props);
    this.img = props.img;
    this.title = props.title;
    this.content = props.content;
    this.className = props.className;
  }

  render() {
    return (
      <Card className={this.className}>
        <img src={this.img} className="Card-icon" alt="card" />
        <h3 style={{ marginTop: "30px" }}>{this.title}</h3>
        <p style={{ marginTop: "10px" }}>{this.content}</p>
      </Card>
    );
  }
}
