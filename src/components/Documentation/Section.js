import React, { createElement } from "react";
import marksy from "marksy/components";
import { isNil } from "lodash";
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
          <a className="Documentation-HeaderLink" href={`#${id}`}>
            {children}
          </a>
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
          <a className="Documentation-HeaderLink" href={`#${id}`}>
            {children}
          </a>
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
          <a className="Documentation-HeaderLink" href={`#${id}`}>
            {children}
          </a>
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
          <a className="Documentation-HeaderLink" href={`#${id}`}>
            {children}
          </a>
        </Header>
      );
    },
    blockquote({ children }) {
      return (
        <Message>
          {children}
        </Message>
      );
    },
    ol({ children }) {
      return (
        <List ordered>
          {children.map(
            child =>
              child
                ? <List.Item key={yeast()}>
                    {child}
                  </List.Item>
                : null
          )}
        </List>
      );
    },
    ul({ children }) {
      return (
        <List>
          {children.map(
            child =>
              child
                ? <List.Item key={yeast()}>
                    {child}
                  </List.Item>
                : null
          )}
        </List>
      );
    }
  },
  components: {}
});

export default function Section({ name }) {
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
