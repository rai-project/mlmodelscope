import React, { Component } from "react";

export default class ExperimentContentTitle extends Component {
  render() {
    return (
      <div
        style={{
          background: "#1A263A",
          color: "white",
          paddingTop: "30px",
          paddingBottom: "60px",
        }}
      >
        <h2 style={{ marginTop: "60px", marginLeft: "40px", color: "white" }}>
          {this.props.text}
        </h2>
      </div>
    )
  }
}