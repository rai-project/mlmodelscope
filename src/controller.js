import uuid from "uuid";
import store from "store2";
import { Controller, provide } from "cerebral";
import Devtools from "cerebral/devtools";
import StorageProvider from "@cerebral/storage";
import UseragentModule from "@cerebral/useragent";
import HttpProvider from "@cerebral/http";
import Router from "@cerebral/router";

import app from "./modules/app";
import models from "./modules/models";
import model from "./modules/model";

const controller = Controller({
  devtools:
    process.env.NODE_ENV === "production"
      ? null
      : Devtools({
          // Connect to Electron debugger (external debugger). It will
          // fall back to chrome extension if unable to connect
          host: "localhost:8586",

          // By default the devtools tries to reconnect
          // to debugger when it can not be reached, but
          // you can turn it off
          reconnect: true,

          // Time travel
          storeMutations: true,

          // Warnings on mutating outside "state" API
          preventExternalMutations: true,

          // Shows a warning when you have components with number of
          // state dependencies or signals above the set number
          bigComponentsWarning: 5,

          // In addition to these basic JavaScript types: Object, Array, String, Number
          // and Boolean, types of File, FileList, Blob, ImageData and RegExp is allowed to be stored in state
          // tree. You can add additional types if you know what you are doing :)
          allowedTypes: [File, Blob]
        }),
  state: {
    websiteUrl: "http://www.carml.org"
  },
  modules: {
    app,
    models,
    model,
    router: Router({
      routes: {
        "/": "app.homeRouted",
        "/models": "app.modelsRouted",
        "/model/:name/:version": "model.modelRouted",
        "/frameworks": "app.frameworksRouted",
        "/framework/:name/:version": "app.frameworkRouted",
        "/about": "app.aboutRouted"
      }, // Route definitions
      query: true, // Query support
      onlyHash: false // Use hash urls
    }),
    useragent: UseragentModule({
      media: {
        unsupported: "(max-width: 550px)",
        mobile: "(max-width: 700px)",
        desktop: "(min-width: 701px)"
      },
      // check the docs at: https://github.com/HubSpot/offline#advanced
      offline: {
        checkOnLoad: false,
        interceptRequests: true,
        reconnect: {
          initialDelay: 3,
          delay: 1.5
        },
        requests: false
      }
    })
  },
  providers: [
    HttpProvider({
      // Prefix all requests with this url
      baseUrl: "/api",

      // Any default headers to pass on requests
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json"
      },

      // When talking to cross origin (cors), pass cookies
      // if set to true
      withCredentials: false
    }),
    provide("uuid", uuid),
    StorageProvider({
      target: store,
      sync: { carml: "carml" },
      prefix: "carml"
    })
  ]
});

export default controller;
