import { Module } from 'cerebral'

import model from '../model'

export default Module({
  state: {
    selectedModels: [],
    model: model.state,
    data: [],
  },
})
