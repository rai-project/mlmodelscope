import { Module } from 'cerebral'

import modelRouted from './signals/modelRouted'
import modelSelected from './signals/modelSelected'

export default Module({
  state: {
    graph: null,
  },
  signals: {
    modelRouted,
    modelSelected,
  },
})
