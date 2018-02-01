import React, { Component } from 'react'
import Uppy from 'uppy/lib/core'
import Tus from 'uppy/lib/plugins/Tus'
import { Dashboard, ProgressBar } from 'uppy/lib/react'

// eslint-disable-next-line import/no-webpack-loader-syntax
import 'uppy/dist/uppy.css'

// eslint-disable-next-line
const defaultUploadSuccess = () => console.log('onSuccess not registered')

export default class UploadArea extends Component {
  componentWillMount() {
    this.uppy = new Uppy({
      debug: true,
      autoProceed: false,
      restrictions: {
        maxFileSize: 6000000,
        maxNumberOfFiles: 5,
        minNumberOfFiles: 1,
        allowedFileTypes: ['image/*'],
      },
      // eslint-disable-next-line
      onBeforeFileAdded: (currentFile, files) => {
        if (currentFile.type && currentFile.type.split('/')[0] === 'image') {
          return Promise.resolve()
        }
        return Promise.reject(new Error('Invalid file format. Please upload an image'))
      },
      onBeforeUpload: files => {
        if (Object.keys(files).length > 5) {
          return Promise.reject(new Error('Up to five files are allowed'))
        }
        return Promise.resolve()
      },
    })
      .use(Tus, {
        endpoint: '/api/upload/',
        resume: true,
      })
      .run()

    const { onUploadSuccess = defaultUploadSuccess } = this.props
    // eslint-disable-next-line
    this.uppy.on('core:success', fileList => {
      onUploadSuccess(this.uppy.state.files)
    })
  }

  componentWillUnmount() {
    this.uppy.close()
    this.uppy = null
  }

  render() {
    return (
      <div>
        <Dashboard
          uppy={this.uppy}
          plugins={[]}
          locale={{
            strings: {
              chooseFile: 'Choose Input',
              orDragDrop: 'Input recorded',
            },
          }}
        />
        <ProgressBar uppy={this.uppy} />
      </div>
    )
  }
}
