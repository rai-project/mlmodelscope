import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";

import { Header as UIHeader, Container } from "semantic-ui-react";

const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif';

export default connect(
  {
    currentPage: state`app.currentPage`,
    appName: state`app.name`
  },
  function Header({ appName, currentPage }) {
    const showTagLine = currentPage === "Home";
    return (
      <div className="App-header">
        <Container textAlign={"center"}>
          <UIHeader
            inverted
            size="huge"
            style={{
              fontFamily
            }}
          >
            {appName}
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
      </div>
    );
  }
);
