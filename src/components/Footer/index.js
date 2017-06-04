import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

export default class Footer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <a href="https://github.com/rai-project/carml">
        <Header as="h3" inverted>
          <Icon name="github" />
          <Header.Content>
            rai-project/carml
          </Header.Content>
        </Header>
      </a>
    );
  }
}
