import "./LandingPage.css";
import { Row, Col, Carousel } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";

function makeSlide({ tag, body, compare }) {
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
              to={"/experiment"}
              className="button2"
              style={{
                textTransform: "uppercase",
              }}
            >
              {compare}
            </Link>
            {/* <a
              className="button2"
              href="/experiment"
              style={{
                textTransform: "uppercase",
              }}
            >
              {compare}
            </a> */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

const Message1 = (() => {
  const tag = <React.Fragment>Find the most effective machine learning model</React.Fragment>;
  const body = (
    <React.Fragment>
      Find exactly what you need by exploring and reviewing results of different AI experiment
      configurations; without the hassle of installation.
    </React.Fragment>
  );
  const compare = "Compare Models";
  return makeSlide({ tag, body, compare });
})();

const Message2 = (() => {
  const tag = <React.Fragment>Find the most effective machine learning framework</React.Fragment>;
  const body = (
    <React.Fragment>
      Find the framework to use for your model by uploading your model and evaluating its accuracy
      and performance across frameworks.
    </React.Fragment>
  );
  const compare = "Compare Frameworks";
  return makeSlide({ tag, body, compare });
})();

const Message3 = (() => {
  const tag = <React.Fragment>Find the most effective machine learning setup</React.Fragment>;
  const body = (
    <React.Fragment>
      Find exactly what you need by exploring and reviewing results of different AI experiment
      configurations; without the hassle of installation.
    </React.Fragment>
  );
  const compare = "Compare Machines";
  return makeSlide({ tag, body, compare });
})();

export default class Introduction extends Component {
  render() {
    return (
      <div
        className="LandingPage-introduction"
        style={{ minHeight: "60vh", padding: "100px 0", textAlign: "center" }}
      >
        <Carousel autoplay dots={false}>
          {Message1}
          {Message2}
          {Message3}
        </Carousel>
      </div>
    );
  }
}
