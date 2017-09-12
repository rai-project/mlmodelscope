import React from "react";
import { render } from "react-dom";
import controller from "./controller";
import { Container } from "cerebral/react";
import registerServiceWorker from "./registerServiceWorker";

import "semantic-ui-css/semantic.min.css";

import App from "./components/App";

// eslint-disable-next-line
Object.defineProperty(Error.prototype, "toJSON", {
  value: function() {
    var alt = {};

    Object.getOwnPropertyNames(this).forEach(function(key) {
      alt[key] = this[key];
    }, this);

    return alt;
  },
  configurable: true,
  writable: true
});

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
