import React, { Component } from "react";
import { Card, Icon, Drawer, Row, Col } from "antd";
import Markdown from "react-markdown";

export default class SelectableCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: this.props.drawerVisible || false,
      selected: this.props.selected || false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.onDrawerOpen = this.onDrawerOpen.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }

  handleClick() {
    this.setState({ selected: !this.state.selected });
    this.props.onClick();
  }

  onDrawerOpen() {
    this.setState({ drawerVisible: true });
  }
  onDrawerClose() {
    this.setState({ drawerVisible: false });
  }

  render() {
    return (
      <Card
        hoverable
        type={"inner"}
        title={this.props.title}
        onClick={this.handleClick}
        bordered={this.state.selected}
        style={{ height: this.props.height, borderColor: "#e84a27" }}
        extra={
          this.props.description ? (
            <>
              <Icon type="info-circle" theme="outlined" onClick={this.onDrawerOpen} />
              <Drawer
                title={this.props.descriptionTitle || "Information"}
                placement="right"
                width={"30%"}
                closable={true}
                onClose={this.onDrawerClose}
                visible={this.state.drawerVisible}
                style={{
                  height: "calc(100% - 55px)",
                  width: "100%",
                  overflow: "auto",
                  paddingBottom: 53,
                }}
              >
                <Row gutter={16}>
                  <Col>
                    <Markdown source={this.props.description} />
                  </Col>
                </Row>
              </Drawer>
            </>
          ) : null
        }
      >
        {this.props.content}
        {this.props.children}

        {/* <div style={{marginTop: "20px"}}>
            Instances: 
          </div>

          <div style={{marginTop: "22px"}}>
            Format: 
          </div>

          <div style={{marginTop: "22px"}}>
            Default Task: 
          </div> */}
      </Card>
    );
  }
}
