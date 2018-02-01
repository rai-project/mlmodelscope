import { Controller } from 'cerebral'
import Devtools from 'cerebral/devtools'

import app from './modules/app'

const controller = Controller(app, {
  devtools:
    process.env.NODE_ENV === 'production'
      ? null
      : Devtools({
          // Connect to Electron debugger (external debugger). It will
          // fall back to chrome extension if unable to connect
          host: 'localhost:8586',

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
          bigComponentsWarning: 50,

          // Warnings when passing objects and arrays as props to child
          // components. They should rather be connected directly
          warnStateProps: true,

          // In addition to these basic JavaScript types: Object, Array, String, Number
          // and Boolean, types of File, FileList, Blob, ImageData and RegExp is allowed to be stored in state
          // tree. You can add additional types if you know what you are doing :)
          allowedTypes: [File, Blob],
        }),
})

export default controller
