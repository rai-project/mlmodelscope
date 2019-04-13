import React, { Component } from "react";

export default class ExperimentContentTitle extends Component {
  render() {
    return (
      <div
        style={{
          background: "#1a263a",
          // background: "#e84a27",
          width: "100%",
          color: "white",
          paddingTop: "30px",
          paddingBottom: "10px",
        }}
      >
        <h1
          style={{
            marginTop: "60px",
            marginLeft: "5%",
            color: "white",
          }}
        >
          {this.props.text}
        </h1>
      </div>
    );
  }
}
