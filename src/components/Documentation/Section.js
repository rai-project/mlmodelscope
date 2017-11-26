import React, { createElement } from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import marksy from "marksy/components";
import { isNil, trimEnd, startsWith } from "lodash";
import yeast from "yeast";
import { List, Message, Header } from "semantic-ui-react";

import * as sections from "./Sections";

const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

const compile = marksy({
  createElement,
  elements: {
    h1({ id, children }) {
      return (
        <Header
          as="h1"
          style={{
            fontFamily
          }}
        >
          {children}
        </Header>
      );
    },
    h2({ id, children }) {
      return (
        <Header
          as="h2"
          style={{
            fontFamily
          }}
        >
          {children}
        </Header>
      );
    },
    h3({ id, children }) {
      return (
        <Header
          as="h3"
          style={{
            fontFamily
          }}
        >
          {children}
        </Header>
      );
    },
    h4({ id, children }) {
      return (
        <Header
          as="h4"
          style={{
            fontFamily
          }}
        >
          {children}
        </Header>
      );
    },
    blockquote({ children }) {
      return <Message>{children}</Message>;
    },
    ol({ children }) {
      return (
        <List ordered>
          {children.map(
            child =>
              child ? <List.Item key={yeast()}>{child}</List.Item> : null
          )}
        </List>
      );
    },
    ul({ children }) {
      return (
        <List>
          {children.map(
            child =>
              child ? <List.Item key={yeast()}>{child}</List.Item> : null
          )}
        </List>
      );
    },
    a({ href, title, target, children }) {
      if (!startsWith(href, "http")) {
        href = "/about/" + href;
      }
      return (
        <a href={href} title={title} target={target}>
          {children}
        </a>
      );
    }
  },
  components: {}
});

export default connect(
  {
    currentAboutPage: state`app.currentAboutPage`
  },
  function Section({ currentAboutPage }) {
    const name = trimEnd(currentAboutPage, ".md").toLowerCase();
    const section = isNil(sections[name]) ? "#Not found" : sections[name];
    return (
      <div
        style={{
          fontFamily,
          color: "black"
        }}
      >
        {compile(section, null, {}).tree}
      </div>
    );
  }
);
