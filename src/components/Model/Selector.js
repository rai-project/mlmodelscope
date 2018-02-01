import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import { Dropdown } from 'semantic-ui-react'
import { isNil } from 'lodash'

import visableModel from '../../computed/visableModels'
import * as logos from '../../assets/logos'

export default connect(
  {
    models: visableModel,
    selectedModels: state`models.selectedModels`,
    modelSelected: signal`model.modelSelected`,
    modelInformationsRequest: signal`modelInformationsRequest`,
  },
  class ModelSelector extends React.Component {
    componentDidMount() {
      const { modelInformationsRequest } = this.props
      if (isNil(modelInformationsRequest)) {
        return
      }
      modelInformationsRequest()
    }
    render() {
      const { models, selectedModels, open, modelSelected } = this.props

      if (!models || models.length === 0) {
        return <div />
      }
      let ii = 0
      const selectors = models.map(model => {
        ii++
        return {
          key: `model-${ii}`,
          value: JSON.stringify(model),
          text: model.name,
          description: `model version ${model.version}`,
          image: {
            avatar: true,
            src: logos[model.framework.name.toLowerCase()],
          },
        }
      })

      const extraOpts = {}
      if (open && selectedModels.length === 0) {
        extraOpts.open = true
      }
      return (
        <Dropdown
          fluid
          search
          selection
          multiple
          options={selectors}
          placeholder="Select your Neural Network Model"
          searchInput={{ type: 'text' }}
          onChange={(e, { value }) => {
            modelSelected({
              manifests: value.map(v => JSON.parse(v)),
            })
          }}
          {...extraOpts}
        />
      )
    }
  }
)
