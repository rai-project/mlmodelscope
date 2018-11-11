import "./LandingPage.css";
import { Row, Col, Avatar } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import CardWithIcon from "../Card/CardWithIcon";
import Section1BG from "../../resources/landingpage/assets/section1-background.jpg";
import Section1Fig1 from "../../resources/landingpage/assets/section1-figure-1.png";
import Section1Fig2 from "../../resources/landingpage/assets/section1-figure-2.png";
import Section1Fig3 from "../../resources/landingpage/assets/section1-figure-3.png";
import Section1Fig4 from "../../resources/landingpage/assets/section1-figure-4.svg";
import Section2Fig1 from "../../resources/landingpage/assets/section2-figure-1.svg";
import Section2Fig2 from "../../resources/landingpage/assets/section2-figure-2.svg";
import Section2Fig3 from "../../resources/landingpage/assets/section2-figure-3.svg";
import Section2Fig4 from "../../resources/landingpage/assets/section2-figure-4.svg";
import Section3Fig from "../../resources/landingpage/assets/section3-figure-1.png";
import Section4Fig1 from "../../resources/landingpage/assets/section4-figure-1.png";
import Section5Fig1 from "../../resources/landingpage/assets/section5-figure-1.png";

export default class Section1 extends Component {
  render() {
    return (
      <div>
        <div className="LandingPage-introduction">
          <img className="Section1-figure1" src={Section1Fig1} />
          <img className="Section1-figure2" src={Section1Fig2} />
          <img className="Section1-figure3" src={Section1Fig3} />
          <div className="Section1-text">
            <h2>ML MODEL SCOPE</h2>
            <h1>Find the most effective machine learning setup</h1>
            <Link to={"/experiment"}>
              <PrimaryButton text="RUN EXPERIMENT" />
            </Link>
          </div>
        </div>

        <img className="Section1-figure4" src={Section1Fig4} />

        <div className="LandingPage-section2">
          <div className="Section2-text">
            <h2>NO NEED TO SETUP</h2>
            <p>
              Find exactly what you need by exploring and reviewing results of different AI
              experiment configurations; without the hassle of installation.
            </p>
          </div>

          <div className="Section2-cards">
            <Row gutter={4}>
              <Col span={6}>
                <CardWithIcon
                  className="Section2-card"
                  img={Section2Fig1}
                  title={"DATA SET"}
                  content={"Identify a public data set for my work"}
                />
              </Col>
              <Col span={6}>
                <CardWithIcon
                  className="Section2-card"
                  img={Section2Fig2}
                  title={"MODELS"}
                  content={"Find a well trained model"}
                />
              </Col>
              <Col span={6}>
                <CardWithIcon
                  className="Section2-card"
                  img={Section2Fig3}
                  title={"FRAMEWORKS"}
                  content={"Uncover the best frameworks"}
                />
              </Col>
              <Col span={6}>
                <CardWithIcon
                  className="Section2-card"
                  img={Section2Fig4}
                  title={"MACHINES"}
                  content={"Uncover the machine with the performance you want"}
                />
              </Col>
            </Row>
          </div>
        </div>

        <div className="LandingPage-section3">
          <div className="Section3-text">
            <h2>ONE PLATFORM ONE PLAYGROUND</h2>
            <p>
              Bring together dispersed tools into one platform to explore the performance of
              different combinations. Discover the most efficient frameworks, models and hardware
              for your specific experiment in ont platform.
            </p>
          </div>
          <img className="Section3-figure" src={Section3Fig} />
        </div>

        <div className="LandingPage-section4">
          <div className="Section4-text">
            <h2 style={{ color: "white" }}>COMPARE ALL</h2>
            <p style={{ color: "white" }}>
              Use side by side comparisons, graphs, and tables to draw insights and make an informed
              decision on which tools to use. View all the important metrics on your inference to
              get an overall understanding and to and go deeper into the details.
            </p>
          </div>

          <img className="Section4-figure1" src={Section4Fig1} />
        </div>

        <div className="LandingPage-section5">
          <div className="Section5-text">
            <h1> Find the most effective machine learning setup </h1>
            <PrimaryButton text="RUN EXPERIMENT" />
          </div>
          <img className="Section5-figure" src={Section5Fig1} />
        </div>
      </div>
    );
  }
}
