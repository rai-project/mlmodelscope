import { redirect } from '@cerebral/router/operators'
import { set, equals } from 'cerebral/operators'
import { state, props, string } from 'cerebral/tags'

import resetError from '../../common/chains/resetError'
import openTutorial from './openTutorial'
import closeTutorial from './closeTutorial'

export default [
  ...resetError,
  ...closeTutorial,
  set(state`app.currentPage`, props`name`),
  equals(props`name`),
  {
    Home: [redirect(string`/`)],
    Tutorial: [...openTutorial, redirect(string`/`)],
    Frameworks: [redirect(string`/frameworks`)],
    Models: [redirect(string`/models`)],
    Agents: [redirect(string`/agents`)],
    About: [redirect(string`/about/introduction`)],
  },
]
