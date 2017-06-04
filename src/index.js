import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import controller from "./controller";
import { Container } from "cerebral/react";
import registerServiceWorker from "./registerServiceWorker";

import "semantic-ui-css/semantic.min.css";

import App from "./components/App";

function renderApp() {
  document.querySelector("#loader").style.display = "none";
  unmountComponentAtNode(document.getElementById("root"));

  render(
    <Container controller={controller}>
      <App />
    </Container>,
    document.querySelector("#root")
  );

  registerServiceWorker();
}

renderApp();
