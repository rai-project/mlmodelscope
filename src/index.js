import React from "react";
import { render } from "react-dom";
import controller from "./controller";
import { Container } from "cerebral/react";
import registerServiceWorker from "./registerServiceWorker";

import "./reset.css";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

import App from "./components/App";

function renderApp() {
  render(
    <Container controller={controller}>
      <App />
    </Container>,
    document.querySelector("#root")
  );

  registerServiceWorker();
}

renderApp();
