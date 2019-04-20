import React, { Component } from "react";
import { Card, Icon, Drawer, Row, Col } from "antd";
import Markdown from "react-markdown";

export default class SelectableCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.onDrawerOpen = this.onDrawerOpen.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  onDrawerOpen() {
    this.setState({ drawerVisible: true });
  }
  onDrawerClose() {
    this.setState({ drawerVisible: false });
  }

  render() {
    var borderColor = this.props.selected ? "#e84a27" : "white";
    return (
      <Card
        hoverable
        type={"inner"}
        title={this.props.title}
        onClick={this.handleClick}
        bordered={true}
        style={{ height: this.props.height, borderColor: borderColor }}
        cover={this.props.cover}
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
                // style={{
                //   height: "calc(100% - 55px)",
                //   width: "100%",
                //   overflow: "auto",
                //   paddingBottom: 53,
                // }}
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
      </Card>
    );
  }
}
