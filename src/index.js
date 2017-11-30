import React from "react";
import { render } from "react-dom";
import controller from "./controller";
import { Container } from "@cerebral/react";
import registerServiceWorker, { unregister } from "./registerServiceWorker";

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
  if (false && process.env.NODE_ENV === "production") {
    registerServiceWorker();
  } else if (process.env.NODE_ENV !== "production") {
    try {
      unregister();
      // eslint-disable-next-line
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    } catch (e) {}
  }

  render(
    <Container controller={controller}>
      <App />
    </Container>,
    document.querySelector("#root")
  );
}

renderApp();
