import React from "react";
import { Row as AntdRow, Col, Divider as AntDivider, Button, Icon } from "antd";
import Color from "color";

export const PrimaryColor = "#1A263A";
export const TextColor = "#5a5a5a";
export const OrangeColor = "#E94A37";

export const LightPrimaryColor = Color(PrimaryColor)
  .lighten(0.5)
  .hex();
export const DarkerPrimary = Color(PrimaryColor)
  .darken(0.5)
  .hex();

export const LightOrange = Color(OrangeColor)
  .lighten(0.2)
  .hex();

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

export const Link = function({ children, href }) {
  return (
    <a style={{ color: TextColor }} href={href}>
      {children}
    </a>
  );
};

export const PanelsHeading = function({ isMobile = false, children, style = {} }) {
  return (
    <AntdRow
      type="flex"
      justify="space-around"
      style={{
        backgroundColor: PrimaryColor,
        fontSize: isMobile ? "2rem" : "3.5rem",
        color: "white",
        textAlign: "left",
        textShadow: `5px 5px ${LightPrimaryColor}`,
        marginTop: "4rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        ...style,
      }}
    >
      <Col>{children}</Col>
    </AntdRow>
  );
};

export const LearnMoreButton = function({ link }) {
  return (
    <Button ghost type="dashed" href={(link = "http://docs.mlmodelscope.org")}>
      <div style={{ color: TextColor }}>
        Learn More
        <Icon type="right" />
      </div>
    </Button>
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
  divider = true,
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
          marginBottom: "1.5rem",
          marginTop: "1.5rem",
          ...style,
        }}
      >
        {position === "left" || isMobile ? (
          <React.Fragment>
            <Col span={isMobile ? 20 : 12}>{text}</Col>
            {isMobile
              ? null
              : icon && (
                  <Col span={3} offset={2}>
                    {icon}
                  </Col>
                )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {icon && <Col span={3}>{icon}</Col>}
            <Col span={isMobile ? 20 : 12} offset={icon ? 2 : 0}>
              {text}
            </Col>
          </React.Fragment>
        )}
      </Row>
      {divider ? <Divider /> : null}
    </React.Fragment>
  );
};

export default Panel;
