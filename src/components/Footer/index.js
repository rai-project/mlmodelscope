import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";

import c3srImage from "../../assets/images/C3SR_color.jpg";
import uiucImage from "../../assets/images/UIUC_Logo_University_of_Illinois_at_Urbana-Champaign.jpg";

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/rai-project/carml">
        <Image src={c3srImage} size="small" floated="right" />
        <Image src={uiucImage} size="small" floated="right" />
        <Header as="h3" inverted>
          <Icon name="github" />
          <Header.Content>
            rai-project/carml
          </Header.Content>
        </Header>
      </a>
    </footer>
  );
}
