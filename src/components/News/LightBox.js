import "./LightBox.css";
import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import yeast from "yeast";
import ReactDOM from 'react-dom';

var news_images = require.context("../../resources/news", true);
class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      enableNext: this.props.images.length > 4,
      enablePrevious: false,
    };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrev() {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
      enablePrevious: this.state.currentIndex > 1,
      enableNext: true,
    });
  }

  handleNext() {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      enablePrevious: true,
      enableNext: this.state.currentIndex + 4 < this.props.images.length,
    });
  }

  render() {
    return (
      <Row type="flex" aligh="middle" justify="center">
        <Col span={2}>
          {this.state.enablePrevious && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
              }}
              onClick={this.handlePrev}
            >
              <Icon type="left" style={{ fontSize: "3em" }} />
            </div>
          )}
        </Col>
        {this.props.images.map((src, index) => {
          if (index >= this.state.currentIndex && index < this.state.currentIndex + 4) {
            return (
              <Col span={5}>
                <img
                  key={yeast()}
                  alt={""}
                  src={news_images("./" + src)}
                  style={{ width: "90%", margin: "5%" }}
                  onClick={() => this.props.handleClick(index)}
                />
              </Col>
            );
          }
        })}
        <Col span={2}>
          {this.state.enableNext && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
              }}
              onClick={this.handleNext}
            >
              <Icon type="right" style={{ fontSize: "3em" }} />
            </div>
          )}
        </Col>
      </Row>
    );
  }
}

export default class LightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: props.images.length + props.videos.length,
      currentSlide: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    this.setState({ currentSlide: i });
  }

  render() {

    var contents = [];
    this.props.images.map((src, index) => {
      if (index == this.state.currentSlide) {
        var indexPlusOne = index + 1;
        contents.push(
          <div>
            <div class="numbertext">
              {indexPlusOne.toString() +
                " / " +
                this.state.total.toString()}
            </div>
            <img
              alt=""
              src={news_images("./" + src)}
              style={{ width: "100%" }}
            />
          </div>
        );
      }
    })
    this.props.videos.map((src, index) => {
      if (index + this.props.images.length == this.state.currentSlide) {
        var indexPlusOne = this.state.currentSlide + 1;
        contents.push(
          <div>
            <div class="numbertext">
              {indexPlusOne.toString() +
                " / " +
                this.state.total.toString()}
            </div>
            <iframe
            src={src}
            style={{width: "100%", height: "800px"}}/>
          </div>
        );
      }
    })

    return (
      <React.Fragment>
        {/* <ImagePreview images={this.props.images} handleClick={this.handleClick} /> */}
        <div id={"myModal" + this.props.index.toString()} class="modal">
          <span
            class="close cursor"
            onClick={() => (document.getElementById("myModal" + this.props.index.toString()).style.display = "none")}
          >
            <Icon type="close" style={{ color: "white" }} />
          </span>
          <div class="modal-content">
            {contents}

            <a
              class="prev"
              onClick={() => this.setState({ currentSlide: Math.abs((this.state.currentSlide - 1) % this.state.total) })}
            >
              &#10094;
            </a>
            <a
              class="next"
              onClick={() => this.setState({ currentSlide: Math.abs((this.state.currentSlide + 1) % this.state.total) })}
            >
              &#10095;
            </a>

            {/* <ImagePreview images={this.props.images} handleClick={this.handleClick} /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
