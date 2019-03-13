import React, { Component } from "react";
import { Col, Row, Icon, Dropdown, Menu, Tag, Spin } from "antd";
import { find, filter, union, remove } from "lodash";
import SelectableCard from "../SelectableCard/index";
import { ExperimentContext } from "../../../context/ExperimentContext";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const dataTypes = ["image", "video", "text", "audio"];
const techniques = ["classification", "segmentation", "regression", "clustering", "detection"];


export default class PublicDataset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDataType: [],
      selectedTechnique: []
    }
    this.handleSelectDataType = this.handleSelectDataType.bind(this);
    this.handleSelectTechnique = this.handleSelectTechnique.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
  };

  handleSelectDataType(e) {
    this.setState({selectedDataType: this.state.selectedDataType.concat([e.key])}) 
  }
  
  handleSelectTechnique(e) {
    this.setState({selectedTechnique: this.state.selectedTechnique.concat([e.key])}) 
  }

  handleRemoveTag(key) {
    console.log(key)
    remove(this.state.selectedDataType, function(x) { return x === key });
    remove(this.state.selectedTechnique, function(x) { return x === key });
    this.setState({ selectedDataType: this.state.selectedDataType, selectedTechnique: this.state.selectedTechnique });
  }

  renderSelectedFlags(selectedDataType, selectedTechnique) {
    return(
      union(selectedDataType, selectedTechnique).map((t) => {
        console.log(t);
        return(
        <Tag key={t} style={{ marginLeft: "20px" }} closable onClose={() => this.handleRemoveTag(t)}>
          {t.toUpperCase()}
        </Tag>
        )
      }
      )
    )
  }



  render() {  
    const dataTypeMenu = (
      <Menu onClick={this.handleSelectDataType}>
        {
          dataTypes.map((type) => 
            <Menu.Item key={type}>
              <a // eslint-disable-line
                target="_blank"
                rel="noopener noreferrer"
              >
                {capitalize(type)}
              </a>
            </Menu.Item>
          )
        }
      </Menu>
    );

    const techniqueMenu = (
      <Menu onClick={this.handleSelectTechnique}>
        {
          techniques.map((technique) => 
            <Menu.Item key={technique}>
              <a // eslint-disable-line
                target="_blank"
                rel="noopener noreferrer"
              >
                {capitalize(technique)}
              </a>
            </Menu.Item>
          )
        }
      </Menu>
    );

    var datasets = this.props.datasetOptions
    var selectedDataType = this.state.selectedDataType
    var selectedTechnique = this.state.selectedTechnique
    if (selectedDataType.length !== 0) {
        datasets = filter(datasets, function(d) { return selectedDataType.indexOf(d.type) !== -1})
    }
    if (selectedTechnique.length !== 0) {
        datasets = filter(datasets, function(d) { return selectedTechnique.indexOf(d.technique) !== -1})
    }
    console.log(this.state)

    return (
      <div>
        <div
          style={{
            paddingTop: "20px",
            paddingLeft: "40px",
            backgroundColor: "#131C2D",
            height: "60px",
            color: "white",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <Dropdown overlay={dataTypeMenu}>
              <a // eslint-disable-line
                style={{ color: "white" }}
              >
                Data Format <Icon type="caret-down" theme="outlined" />
              </a>
            </Dropdown>
          </div>

          <div style={{ marginLeft: "40px", display: "inline-block" }}>
            <Dropdown overlay={techniqueMenu}>
              <a // eslint-disable-line
                style={{ color: "white" }}
              >
                Technique <Icon type="caret-down" theme="outlined" />
              </a>
            </Dropdown>
          </div>

          <div style={{ float: "right", marginRight: "40px", display: "inline-block" }}>
            <Icon type="appstore" theme="outlined" />
          </div>

          <div style={{ float: "right", marginRight: "40px", display: "inline-block" }}>
            <Icon type="bars" theme="outlined" />
          </div>
        </div>

        <div style={{ paddingTop: "20px", paddingBottom: "20px", paddingLeft: "40px" }}>
          Filtered By:
          {
            (selectedDataType.length === 0 && selectedTechnique.length === 0) ?
              <Tag style={{ marginLeft: "20px" }} >
                ALL
              </Tag>
              :
              this.renderSelectedFlags(selectedDataType, selectedTechnique)
          }
        </div>

        <div>
          <Row gutter={1}>
            {datasets.map((item, index) =>
              item.name === "ilsvrc2012" || item.name === "segmentation" ? (
                <Col sm={8} xs={24} key={`dataset-${index}`} style={{ padding: "10px" }}>
                  <ExperimentContext.Consumer>
                    {context => (
                      <SelectableCard
                        title={item.name}
                        content={item.description}
                        height="200px"
                        onClick={() => context.addDataset(item)}
                        selected={find(context.dataset, e => e.name === item.name)}
                      />
                    )}
                  </ExperimentContext.Consumer>
                </Col>
              ) : (
                <Col sm={8} xs={24} style={{ padding: "10px" }}>
                  <Spin tip="Comming Soon...">
                    <SelectableCard
                      item={item}
                      content={item.description}
                      height="200px"
                      // onClick={() => this.props.onSelect('data', index)}
                      selected={false}
                    />
                  </Spin>
                </Col>
              )
            )}
          </Row>
        </div>
      </div>
    );
  }
}
