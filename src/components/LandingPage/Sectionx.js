import "./LandingPage.css";
import { Row, Col, Card } from "antd";
import React, { Component } from "react";

export default class Section1 extends Component {
  render() {
    return [
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{
          backgroundColor: "white", //"#E94A37",
        }}
      >
        <Col span={8} sm={8} xs={24}>
          <p
            style={{
              fontSize: "20pt",
              marginTop: "20px",
              color: "#19263a", //"white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Why MLModelScope?
          </p>
        </Col>
      </Row>,
      <Row
        gutter={16}
        style={{
          backgroundColor: "#E94A37",
        }}
      >
        <Col span={12} md={8} sm={12} xs={24}>
          <p>Reproducibility and Consistency</p>
        </Col>
        <Col span={12} md={8} sm={12} xs={24}>
          <Card
            hoverable
            cover={
              <img alt="image1" style={{ width: "100%" }} src="/static/images/TODO.jpg" />
            }
          >
            <Card.Meta title="Reproducibility and Consistency" description="TODO" />
          </Card>
        </Col>
        <Col span={12} md={8} sm={12} xs={24}>
          <Card
            hoverable
            cover={
              <img
                alt="image2"
                style={{ width: "100%" }}
                src="/static/images/burger2.jpg"
              />
            }
          >
            <Card.Meta title="Menu 2" description="burger on white ceramic plate" />
          </Card>
        </Col>
        <Col span={12} md={8} sm={12} xs={24}>
          <p>Local and remote system measurement</p>
        </Col>
        <Col span={8} md={8} sm={12} xs={24}>
          <Card
            hoverable
            cover={
              <img
                alt="image3"
                style={{ width: "100%" }}
                src="/static/images/burger3.jpg"
              />
            }
          >
            <Card.Meta title="Menu 3" description="burger with tomato and onion" />
          </Card>
        </Col>
        <Col span={12} md={8} sm={12} xs={24}>
          <p>
            Profiling at different at abstraction levels throughout the entire pipeline
          </p>
        </Col>
        <Col span={8} md={8} sm={12} xs={24}>
          <Card
            hoverable
            cover={
              <img
                alt="image4"
                style={{ width: "100%" }}
                src="/static/images/burger4.jpg"
              />
            }
          >
            <Card.Meta title="Menu 5" description="burger with vegetables" />
          </Card>
        </Col>
        <Col span={12} md={8} sm={12} xs={24}>
          <p>Hardware/Software Agnostic</p>
        </Col>
        <Col span={8} md={8} sm={12} xs={24}>
          <Card
            hoverable
            cover={
              <img
                alt="image5"
                style={{ width: "100%" }}
                src="/static/images/burger5.jpg"
              />
            }
          >
            <Card.Meta title="Menu 6" description="burger with vegetables" />
          </Card>
        </Col>
        <Col span={12} md={8} sm={12} xs={24}>
          <p>Extensible and Customizable</p>
        </Col>
        <Col span={8} md={8} sm={12} xs={24}>
          <Card
            hoverable
            cover={
              <img
                alt="image6"
                style={{ width: "100%" }}
                src="/static/images/burger6.jpg"
              />
            }
          >
            <Card.Meta title="Menu 4" description="burger with vegetables" />
          </Card>
        </Col>
        <Col span={12} md={8} sm={12} xs={24}>
          <p>Web and command line interface</p>
        </Col>
        <Col span={8} md={8} sm={12} xs={24}>
          <Card
            hoverable
            cover={
              <img
                alt="image6"
                style={{ width: "100%" }}
                src="/static/images/burger6.jpg"
              />
            }
          >
            <Card.Meta title="Menu 4" description="burger with vegetables" />
          </Card>
        </Col>
        <Col span={12} md={8} sm={12} xs={24}>
          <p>Built-in models and datasets</p>
        </Col>
      </Row>,
    ];
  }
}
