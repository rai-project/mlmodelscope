import React, { Component } from "react";
import { Button, Row, Col } from "antd";

import "./LandingPage.css";

export default class Section2 extends Component {
  render() {
    return (
      <div className="LandingPage-section2">
        {/* <Row type="flex" justify="space-around">
          <Col span={6} xs={24} md={8}>
            <p style={{ fontSize: "16pt", marginTop: "20px", color: "#1A263A" }}>
              Bring together dispersed tools into one platform to explore the performance
              of different combinations
            </p>
          </Col>
          <Col span={6} xs={24} md={8}>
            <p style={{ fontSize: "16pt", marginTop: "20px", color: "#1A263A" }}>
              Take away the pain of comparing tools by eliminating the cumbersome
              installation process and the stress of sorting dependencies
            </p>
          </Col>
          <Col span={6} xs={24} md={8}>
            <p style={{ fontSize: "16pt", marginTop: "20px", color: "#1A263A" }}>
              Discover the most efficient frameworks, models and hardware for your
              specific experiment Use side by side comparisons, graphs, and tables to draw
              insights and make an informed decision on which tools to use
            </p>
          </Col>
        </Row> */}
        {/* <Row type="flex" justify="space-around">
          <Col>
            <p
              style={{
                fontSize: "12pt",
                fontWeight: "bold",
                marginTop: "10px",
                color: "#0FACAC",
              }}
            >
              <a href="docs.mlmodelscope.org">
                <Button type="primary">Learn More</Button>
              </a>
            </p>
          </Col>
        </Row> */}
      </div>
    );
  }
}
