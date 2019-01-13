import "./Conference.css";
import React, { Component } from "react";
import { Row, Col, Carousel } from "antd";
import { Link } from "react-router-dom";

function makeSlide({ tag, body, button, link }) {
  return (
    <div style={{ minHeight: "50vh", padding: "20px", margin: "20px" }}>
      <Row type="flex" justify="space-around">
        <Col>
          <h1
            style={{
              marginTop: "100px",
              color: "white",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {tag}
          </h1>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span={9}>
          <p
            style={{
              fontSize: "10pt",
              textAlign: "center",
              color: "white",
            }}
          >
            {body}
          </p>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col>
          <div style={{ marginTop: "20px" }} align="center">
            <Link
              to={link}
              className="button2"
              style={{
                textTransform: "uppercase",
              }}
            >
              {button}
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default class ConferenceLandingPage extends Component  {
  render() {
    const Message1 = (() => {
      const tag = <React.Fragment>Upload Models for Paper</React.Fragment>;
      const body = (
        <React.Fragment>
          You can upload your model here for your paper and allow people
          in the conference to review the performance and results.
        </React.Fragment>
      );
      const button = "Upload Models";
      const link = this.props.match.path + "/upload";
      return makeSlide({ tag, body, button, link });
    })();

    const Message2 = (() => {
      const tag = <React.Fragment>Review and Test Models for Paper</React.Fragment>;
      const body = (
        <React.Fragment>
          You can review and test models uploaded by people for different conferences.
        </React.Fragment>
      );
      const button = "Review Models";
      const link = this.props.match.path + "/test";
      return makeSlide({ tag, body, button, link });
    })();

    return(
      <div className="introduction">
        <Carousel autoplay>
          {Message1}
          {Message2}
        </Carousel>
      </div>
    )
  }
}