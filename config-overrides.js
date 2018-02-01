// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs')
const { compose, injectBabelPlugin } = require('react-app-rewired')
const rewireIdx = require('react-app-rewire-idx')
const rewireTypescript = require('react-app-rewire-typescript')
const rewireLodash = require('react-app-rewire-lodash')
const rewireLess = require('react-app-rewire-less')
const lessToJs = require('less-vars-to-js')

// Read the less file in as string
const loadedVarOverrides = fs.readFileSync('config-overrides-ant-variables.less', 'utf8')

const injector = function(config, env) {
  return injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config)
}

// Pass in file contents
const modifyVars = lessToJs(loadedVarOverrides)

module.exports = compose(
  rewireIdx,
  rewireTypescript,
  rewireLodash,
  injector,
  rewireLess.withLoaderOptions({ modifyVars })
  // other rewires...
)
