import React from "react";
import { Row as AntdRow, Col, Divider as AntDivider } from "antd";

const Row = function({ style, justify, children }) {
  style = style || {};
  return (
    <AntdRow
      type="flex"
      justify={justify || "start"}
      align="middle"
      style={{
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
  isMobile = false,
  position = "left",
  learnMore,
  text,
  icon,
  link,
  children,
}) {
  text = text || children || "";
  if (link) {
    text = (
      <React.Fragment>
        {text} {link}
      </React.Fragment>
    );
  }
  if (title) {
    text = (
      <React.Fragment>
        <p
          style={{
            fontSize: isMobile ? "1.5rem" : "2.8rem",
            fontWeight: 500,
            marginBlockEnd: 0,
          }}
        >
          {title}
        </p>
        <div style={{ fontSize: isMobile ? "1rem" : "inherit" }}>{text}</div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Row
        justify="center"
        style={{
          fontSize: "1.5rem",
          fontWeight: "300",
          ...style,
        }}
      >
        {position === "left" || isMobile ? (
          <React.Fragment>
            <Col span={isMobile ? 20 : 14}>{text}</Col>
            {isMobile ? null : (
              <Col span={3} offset={1}>
                {icon}
              </Col>
            )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {isMobile ? null : <Col span={3}>{icon}</Col>}
            <Col span={isMobile ? 20 : 14} offset={1}>
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

export default Panel;
