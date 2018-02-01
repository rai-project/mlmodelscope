import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'
import { filter } from 'lodash'

const visableModels = Compute(state`models.data`, items => filter(items, item => !item.hidden))

export default visableModels
