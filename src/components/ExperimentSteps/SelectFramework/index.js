import SelectableCard from "../SelectableCard/index";
import React, { Component } from "react";
import { Layout, Col, Row, Card } from "antd";
import { isArray, find } from "lodash";
import yeast from "yeast";
import { withRouter } from "react-router-dom";
import { FrameworkManifests } from "../../../swagger";
import { ExperimentContext } from "../../../context/ExperimentContext";

const { Content } = Layout;
const { Meta } = Card;
var logos = require.context('../../../resources/logos', true);

function frameworkLogo(frameworkName) {
  let image = logos("./"+frameworkName+".png");
  return (
    <img src={image} alt={frameworkName} style={{width: "80%", marginLeft: "auto", marginRight: "auto"}}/>
  )
}

class SelectFramework extends Component {
  async componentDidMount() {
    if (this.props.context.frameworkManifests === null) {
      try {
        // todo: need to filter based on what is selected
        const req = await FrameworkManifests({
          frameworkName: "*",
          frameworkVersion: "*",
        });
        this.props.context.setFrameworkManifests(req.manifests);
      } catch (err) {
        console.error(err);
      }
    }
  }

  render() {
    const frameworks = this.props.context.frameworkManifests;
    if (!isArray(frameworks)) {
      return <div />;
    }
    return (
      <Layout style={{ background: "#E8E9EB", margin: "0px 20px 120px 20px" }}>
        <Content style={{}}>
          <div
            style={{
              background: "#1A263A",
              color: "white",
              paddingTop: "30px",
              paddingBottom: "60px",
            }}
          >
            <h2 style={{ marginTop: "60px", marginLeft: "40px", color: "white" }}>
              Select the Framework
            </h2>
          </div>

          <div>
            <Row gutter={16}>
              {frameworks.map((item, index) => (
                <Col key={yeast()} span={8} style={{ padding: "10px" }}>
                  <SelectableCard
                    tooltip={true}
                    onClick={() => this.props.context.addFramework(item.name, item.version)}
                    cover={frameworkLogo(item.name.toLowerCase())}
                    selected={find(
                      this.props.context.frameworks,
                      e => e.name === item.name && e.version === item.version
                    )}
                  >
                  <Meta
                    title={item.name + " V" + item.version}
                    description="Description: TODO"
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
    {context => <SelectFramework {...props} context={context} />}
  </ExperimentContext.Consumer>
));
