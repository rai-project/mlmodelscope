import React from "react";
import { Header as UIHeader, Segment, Container } from "semantic-ui-react";

const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default function Header() {
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
        <UIHeader
          inverted
          size="small"
          style={{
            fontFamily
          }}
        >
          Cognitive ARtifacts for Machine Learning
        </UIHeader>
      </Container>
    </Segment.Group>
  );
}
