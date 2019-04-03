import React, { Component } from "react";
import idx from "idx";
import { Tabs } from "antd";
import { capitalize, isNil } from "lodash";
import { Row, Col, Select } from "antd";
import ClassificationResult from "./ClassificationResult";
import SegmentationResult from "./SegmentationResult";
import ImageEnhancementResult from "./ImageEnhancementResult";
import SemanticSegmentationResult from "./SemanticSegmentationResult";

function renderResult(d, target, imgIndex, imgUrl, displayTrace = false) {
  if (isNil(d)) {
    return null;
  }
  var features = idx(d, _ => _.response[imgIndex].features);
  try {
    if (features[0].type === "CLASSIFICATION") {
      return (
        <ClassificationResult
          features={features}
          traceId={d.traceId}
          displayTrace={displayTrace}
        />
      );
    }
    if (features[0].type === "BOUNDINGBOX") {
      return (
        <SegmentationResult
          features={features}
          traceId={d.traceId}
          displayTrace={displayTrace}
          imgUrl={imgUrl}
        />
      );
    }
    if (features[0].type === "INSTANCESEGMENT") {
      return <div>Implement INSTANCESEGMENT feature type </div>;
    }
    if (features[0].type === "SEMANTICSEGMENT") {
      return (
        <SemanticSegmentationResult
          features={features}
          traceId={d.traceId}
          displayTrace={displayTrace}
          imgUrl={imgUrl}
        />
      )
    }
    if (features[0].type === "IMAGEENHANCEMENT") {
      return <div>Implement IMAGEENHANCEMENT feature type </div>;
      // return <ImageEnhancementResult features={features}/>;
    }
    return <div>{"Type " + features.type + " is not supported yet!"}</div>;
  } catch (err) {
    return <div>{"Something Went Wrong"}</div>;
  }
}

export default class ResultTab extends Component {
  constructor(props) {
    super(props);
    this.target = this.props.target;
    this.data = this.props.data;
    this.imgUrl = this.props.imgUrl;
    this.imgIndex = this.props.imgIndex;
    this.state = {
      comparison1: this.data.length > 1 ? 0 : null,
      comparison2: this.data.length > 1 ? 1 : null,
    };
  }

  nameVersionFormat(d) {
    return d.name + " V" + d.version;
  }

  renderComparisonPane() {
    var target = this.target;
    var comparison1 = this.state.comparison1;
    var comparison2 = this.state.comparison2;
    var _this = this;

    return (
      <Tabs.TabPane tab={capitalize(this.target) + " Comparison"} key={0}>
        <Row>
          <Col span={12}>
            <Select
              value={comparison1}
              onChange={value => this.setState({ comparison1: value })}
            >
              {this.data.map(function(d, index) {
                var nameVersion = _this.nameVersionFormat(d[target]);
                if (comparison2 === null || comparison2 !== index) {
                  return <Select.Option value={index}>{nameVersion}</Select.Option>;
                }
              })}
            </Select>
          </Col>
          <Col span={12}>
            <Select
              value={comparison2}
              onChange={value => this.setState({ comparison2: value })}
            >
              {this.data.map(function(d, index) {
                var nameVersion = _this.nameVersionFormat(d[target]);
                if (comparison1 === null || comparison1 !== index) {
                  return <Select.Option value={index}>{nameVersion}</Select.Option>;
                }
              })}
            </Select>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            {renderResult(
              this.data[this.state.comparison1],
              target,
              this.imgIndex,
              this.imgUrl
            )}
          </Col>
          <Col span={12}>
            {renderResult(
              this.data[this.state.comparison2],
              target,
              this.imgIndex,
              this.imgUrl
            )}
          </Col>
        </Row>
      </Tabs.TabPane>
    );
  }

  render() {
    var target = this.props.target;
    var imgIndex = this.props.imgIndex;
    var imgUrl = this.props.imgUrl;

    var _this = this;
    console.log(this.data)
    return (
      <Tabs defaultActiveKey="0">
        {this.data.length > 1 ? this.renderComparisonPane() : null}
        {this.data.map(function(d, index) {
          return (
            <Tabs.TabPane tab={_this.nameVersionFormat(d[target])} key={index + 1}>
              {renderResult(d, target, imgIndex, imgUrl, true)}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    );
  }
}
