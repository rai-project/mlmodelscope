import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import { Select, Avatar } from 'antd'
import idx from 'idx'
import _ from 'lodash'

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
      if (_.isNil(modelInformationsRequest)) {
        return
      }
      modelInformationsRequest()
    }
    render() {
      const { models, selectedModels = [], open, modelSelected } = this.props

      if (!models || models.length === 0) {
        return <div />
      }

      const groupedModels = _.groupBy(models, e => idx(e, _ => _.framework.name))
      const options = _.map(groupedModels, (frameworkModels, frameworkName) => {
        const withFrameworkIcon = e => (
          <div>
            <Avatar shape="square" size="small" src={logos[frameworkName.toLowerCase()]} />
            {e}
          </div>
        )
        const es = frameworkModels.map(model => (
          <Select.Option
            key={`select-${frameworkName}-${model.name}`}
            value={JSON.stringify(model)}
            description={`model version ${model.version}`}
          >
            {withFrameworkIcon(model.name)}
          </Select.Option>
        ))
        return (
          <Select.OptGroup key={`select-${frameworkName}`} label={withFrameworkIcon(frameworkName)}>
            {es}
          </Select.OptGroup>
        )
      })

      const extraOpts = {}

      if (open && selectedModels.length === 0) {
        extraOpts.open = true
      }
      return (
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Select your Neural Network Model"
          onChange={value => {
            modelSelected({
              manifests: value.map(v => JSON.parse(v)),
            })
          }}
        >
          {options}
        </Select>
      )
    }
  }
)
