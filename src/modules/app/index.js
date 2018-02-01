import { Module } from 'cerebral'

import Router from '@cerebral/router'
import HttpProvider from '@cerebral/http'
import UseragentModule from '@cerebral/useragent'

import models from '../models'
import model from '../model'

import appLoaded from './signals/appLoaded'
import navbarClicked from './signals/navbarClicked'
import homeRouted from './signals/homeRouted'
import modelInformationsRequest from './signals/modelInformationsRequest'
import predictURLChanged from './signals/predictURLChanged'
import batchSizeChanged from './signals/batchSizeChanged'
import deviceChanged from './signals/deviceChanged'
import traceLevelChanged from './signals/traceLevelChanged'
import agentChanged from './signals/agentChanged'
import predictInputsSet from './signals/predictInputsSet'
import predictURLAdded from './signals/predictURLAdded'
import inferenceButtonClicked from './signals/inferenceButtonClicked'
import modelsRouted from './signals/modelsRouted'
import frameworksRouted from './signals/frameworksRouted'
import agentRouted from './signals/agentRouted'
import agentsRouted from './signals/agentsRouted'
import aboutRouted from './signals/aboutRouted'
import openTutorial from './signals/openTutorial'
import closeTutorial from './signals/closeTutorial'
import aboutPageRouted from './signals/aboutPageRouted'

export default Module({
  state: {
    name: 'CarML',
    websiteUrl: 'http://www.carml.org',
    error: null,
    currentPage: 'Home',
    status: {
      isInfering: false,
      isBusy: false,
      isLoaded: false,
      isPredicting: false,
      isLoadingModel: false,
      isLoadingFrameworkAgents: false,
      isLoadingFrameworkManifests: false,
      isLoadingModelAgents: false,
      isLoadingModelManifests: false,
    },
    predictInputs: [],
    predictURL: 'http://ww4.hdnux.com/photos/41/15/35/8705883/4/920x920.jpg',
    batchSize: 1,
    device: 'GPU',
    traceLevel: 'FULL_TRACE',
    models: {},
    frameworks: {
      data: [],
    },
    selectedAgent: null,
  },
  modules: {
    models,
    model,
    useragent: UseragentModule({
      media: {
        unsupported: '(max-width: 550px)',
        mobile: '(max-width: 700px)',
        desktop: '(min-width: 701px)',
      },
      // check the docs at: https://github.com/HubSpot/offline#advanced
      offline: {
        checkOnLoad: false,
        interceptRequests: true,
        reconnect: {
          initialDelay: 3,
          delay: 1.5,
        },
        requests: false,
      },
    }),
  },
  signals: {
    appLoaded,
    homeRouted,
    navbarClicked,
    predictInputsSet,
    predictURLChanged,
    predictURLAdded,
    batchSizeChanged,
    deviceChanged,
    traceLevelChanged,
    agentChanged,
    modelInformationsRequest,
    inferenceButtonClicked,
    modelsRouted,
    frameworksRouted,
    agentRouted,
    agentsRouted,
    aboutRouted,
    openTutorial,
    closeTutorial,
    aboutPageRouted,
  },
  router: Router({
    routes: {
      '/': 'app.homeRouted',
      '/models': 'app.modelsRouted',
      '/model/:name/:version': 'model.modelRouted',
      '/frameworks': 'app.frameworksRouted',
      '/framework/:name/:version': 'app.frameworkRouted',
      '/agents': 'app.agentsRouted',
      '/agent/:host/:port': 'app.agentRouted',
      '/about': 'app.aboutRouted',
      '/about/:name': 'app.aboutPageRouted',
    }, // Route definitions
    query: true, // Query support
    onlyHash: false, // Use hash urls
    allowEscape: true, // Will allow none matching routes on same origin to run as normal
  }),
  providers: {
    http: HttpProvider({
      // Prefix all requests with this url
      baseUrl: '/api',

      // Any default headers to pass on requests
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },

      // When talking to cross origin (cors), pass cookies
      // if set to true
      withCredentials: false,
    }),
    // StorageProvider({
    //   target: store,
    //   sync: { carml: "carml" },
    //   prefix: "carml",
    // }),
  },
})
