import SelectableCard from "../SelectableCard/index";
import React, { Component } from "react";
import { Layout, Col, Row, Card } from "antd";
import yeast from "yeast";
import { withRouter } from "react-router-dom";
import { ExperimentContext } from "../../../context/ExperimentContext";
import ExperimentContentTitle from "../ExperimentContentTitle";

const { Content } = Layout;
const { Meta } = Card;
const taskList = [
  {
    name: "Classification",
    input: "image",
    output: "CLASSIFICATION",
    image: "classification.png",
    description: "TODO"
  },
  {
    name: "Object Detection",
    input: "image",
    output: "BOUNDINGBOX",
    image: "objectDetection.png",
    description: "TODO"
  },
  {
    name: "Semantic Segmentation",
    input: "image",
    output: "SEMSEGMENTATION",
    image: "semanticSegmentation.png",
    description: "TODO"
  },
  {
    name: "Instance Segmentation",
    input: "image",
    output: "INSTANCESEGMENTATION",
    image: "instanceSegmentation.png",
    description: "TODO"
  },
  {
    name: "Image Enhancement",
    input: "image",
    output: "IMAGEENHANCEMENT",
    image: "imageEnhancement.png",
    description: "TODO"
  }
]

var logos = require.context("../../../resources/taskSample", true);
function taskImage(task) {
  let image = logos("./" + task.image);
  return (
    <img
      src={image}
      alt={task.name}
      style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
    />
  );
}

class SelectTask extends Component {
  render() {
    return (
      <Layout style={{ background: "#E8E9EB", margin: "0px 20px 120px 20px" }}>
        <Content style={{}}>
          <ExperimentContentTitle text={"Select the Task"} />

          <div>
            <Row gutter={16}>
              {taskList.map((item, index) => (
                <Col key={yeast()} md={8} sm={12} xs={24} style={{ padding: "10px" }}>
                  <SelectableCard
                    tooltip={true}
                    onClick={() =>
                      this.props.context.setTask(item)
                    }
                    cover={taskImage(item)}
                    selected={false}
                  >
                    <Meta
                      title={item.name}
                      description={item.description}
                    />
                  </SelectableCard>
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(props => (
  <ExperimentContext.Consumer>
    {context => <SelectTask {...props} context={context} />}
  </ExperimentContext.Consumer>
));
