import React, { Component } from "react";

import { Row as AntdRow, Col, Divider as AntDivider } from "antd";
import yeast from "yeast";
import { MLModelScope } from "@components/Common";
import withSizes from "react-sizes";
import {
  ModelUser as ModelUserIcon,
  SystemDeveloper as SystemDeveloperIcon,
  ModelDeveloper as ModelDeveloperIcon,
} from "./UserAvatars";

const Row = function({ style, justify, children }) {
  style = style || {};
  return (
    <AntdRow
      type="flex"
      justify={justify || "start"}
      align="middle"
      style={{
        marginLeft: "1rem",
        color: "#5a5a5a",
        ...style,
      }}
    >
      {children}
    </AntdRow>
  );
};

const Divider = function() {
  return (
    <Row>
      <Col lg={{ span: 18, offset: 2 }} xs={{ span: 20, offset: 1 }}>
        <AntDivider />
      </Col>
    </Row>
  );
};

const Panel = function({
  style = {},
  title,
  isMobile,
  position = "left",
  text,
  icon,
  children,
}) {
  text = text || children || "";
  text = title ? (
    <React.Fragment>
      <p style={{ fontSize: "2.8rem", fontWeight: 500, marginBlockEnd: 0 }}>{title}</p>
      {text}
    </React.Fragment>
  ) : (
    text
  );
  return (
    <React.Fragment>
      <Row
        style={{
          marginTop: "4rem",
          fontSize: "1.5rem",
          fontWeight: "300",
          ...style,
        }}
      >
        {position === "left" ? (
          <React.Fragment>
            <Col
              lg={{ span: isMobile ? 20 : 14, offset: 2 }}
              xs={{ span: isMobile ? 20 : 14, offset: 1 }}
            >
              {text}
            </Col>
            {isMobile ? null : (
              <Col lg={{ span: 4, offset: 1 }} xs={{ span: 8, offset: 0 }}>
                {icon}
              </Col>
            )}
            ,
          </React.Fragment>
        ) : (
          <React.Fragment>
            {isMobile ? null : (
              <Col lg={{ span: 4, offset: 2 }} xs={{ span: 8, offset: 1 }}>
                {icon}
              </Col>
            )}
            <Col
              lg={{ span: isMobile ? 20 : 14, offset: 0 }}
              xs={{ span: isMobile ? 20 : 14, offset: 0 }}
            >
              {text}
            </Col>
            ,
          </React.Fragment>
        )}
      </Row>
      <Divider />
    </React.Fragment>
  );
};

@withSizes(({ width }, { breakpoint }) => ({ isMobile: width < breakpoint }))
class WhatIsMLModelScope extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <React.Fragment>
        <Panel
          isMobile={isMobile}
          position="left"
          title="Comprehensive ML Evaluation."
          icon={<ModelUserIcon width="10rem" height="10rem" />}
        >
          Bring together dispersed tools into one platform to explore the performance of
          different frameworks, models, and systems.
        </Panel>

        <Panel
          isMobile={isMobile}
          position="right"
          title={"Pick best system combination."}
          icon={<ModelUserIcon width="10rem" height="10rem" />}
        >
          Bring together dispersed tools into one platform to explore the performance of
          different frameworks, models, and systems.
        </Panel>
      </React.Fragment>
    );
  }
}

export default WhatIsMLModelScope;
