import React from "react";
import { connect, compute } from "cerebral/react";
import { state } from "cerebral/tags";

import { Header as UIHeader, Segment, Container } from "semantic-ui-react";

const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    currentPage: state`app.currentPage`
  },
  function Header({ currentPage }) {
    const showTagLine = currentPage === "Home";
    return (
      <Segment.Group
        className="App-header"
        style={{
          borderRadius: 0,
          borderColor: "teal",
          margin: 0,
          fontFamily
        }}
      >
        <Container textAlign={"center"}>
          <UIHeader
            inverted
            size="huge"
            style={{
              fontFamily
            }}
          >
            CarML
          </UIHeader>
          {showTagLine
            ? <UIHeader
                inverted
                size="small"
                style={{
                  fontFamily
                }}
              >
                Cognitive ARtifacts for Machine Learning
              </UIHeader>
            : null}
        </Container>
      </Segment.Group>
    );
  }
);
