import React from "react";
import QueueAnim from "rc-queue-anim";
import { Button, Row, Col } from "antd";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

import "./LandingPage.css";

const Content00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  block: {
    className: "block-wrapper",
    children: [
      {
        name: "block0",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "icon",
            children: "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
          },
          title: { className: "content0-title", children: "一站式业务接入" },
          content: {
            children:
              "Bring together dispersed tools into one platform to explore the performance of different combinations",
          },
        },
      },
      {
        name: "block1",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "icon",
            children: "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png",
          },
          title: {
            className: "content0-title",
            children: "一站式事中风险监控",
          },
          content: { children: "在所有需求配置环节事前风险控制和质量控制能力" },
        },
      },
      {
        name: "block2",
        className: "block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "icon",
            children: "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
          },
          title: { className: "content0-title", children: "一站式数据运营" },
          content: { children: "沉淀产品接入效率和运营小二工作效率数据" },
        },
      },
    ],
  },
};

class Section2 extends React.PureComponent {
  getBlockChildren = data =>
    data.map((item, i) => {
      const children = item.children;
      return (
        <Col key={i.toString()} {...item}>
          <div {...children.icon}>
            <img src={children.icon.children} width="100%" alt="img" />
          </div>
          <h3 {...children.title}>{children.title.children}</h3>
          <div {...children.content}>{children.content.children}</div>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const dataSource = Content00DataSource;
    delete props.dataSource;
    delete props.isMobile;
    const listChildren = this.getBlockChildren(dataSource.block.children);
    return (
      <div className="LandingPage-section2">
        <div>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={8}>
              <p
                style={{
                  fontSize: "20pt",
                  marginTop: "20px",
                  color: "#1A263A",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                What is MLModelScope?
              </p>
            </Col>
          </Row>
          <Row type="flex" justify="space-around">
            <Col span={16}>
              <p style={{ fontSize: "16pt", marginTop: "20px", color: "#1A263A" }}>
                MLModelScope is a open source reproducible model evaluation and profiling
                platform that shields heterogeneity (frameworks, datasets, models,
                hardware configurations) away. This one-stop open platform is designed to
                enable machine learning application, model, and system developers to
                quickly find, test, deploy, and benchmark combinations of models,
                frameworks and hardware configurations.
              </p>
            </Col>
          </Row>
        </div>
        <div {...props} {...dataSource.wrapper}>
          <div {...dataSource.page}>
            <OverPack {...dataSource.OverPack}>
              <QueueAnim
                type="bottom"
                key="block"
                leaveReverse
                {...dataSource.block}
                component={Row}
              >
                {listChildren}
              </QueueAnim>
            </OverPack>
          </div>
        </div>
        <Row type="flex" justify="space-around">
          <Col>
            <p
              style={{
                fontSize: "12pt",
                fontWeight: "bold",
                marginTop: "10px",
                color: "#0FACAC",
              }}
            >
              <a href="docs.mlmodelscope.org">
                <Button type="primary">LEARN MORE</Button>
              </a>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Section2;
