import React from 'react'

import idx from 'idx'
import yeast from 'yeast'
import _ from 'lodash'
import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import { notification, List, Collapse, Divider } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'

const { Panel } = Collapse

const process = error => {
  if (_.isNil(error)) {
    return
  }
  const name = idx(error, _ => _.body.name) || idx(error, _ => _.response.result.name) || idx(error, _ => _.name)
  let code = idx(error, _ => _.response.result.status) || idx(error, _ => _.body.code) || idx(error, _ => _.code)
  let message =
    idx(error, _ => _.response.result.message) || idx(error, _ => _.body.message) || idx(error, _ => _.message)
  let stack = idx(error, _ => _.response.result.stack) || idx(error, _ => _.body.stack) || idx(error, _ => _.stack)

  if (_.isString(stack)) {
    stack = [stack]
  }

  if (!_.isNil(code)) {
    code = <SyntaxHighlighter>{code} :: &nbsp;</SyntaxHighlighter>
  }
  if (!_.isNil(message)) {
    message = <b>{message}</b>
  }
  if (!_.isNil(stack)) {
    const highlight = s => <SyntaxHighlighter>{s}</SyntaxHighlighter>
    const trace =
      _.size(stack) === 1 ? (
        highlight(_.first(stack))
      ) : (
        <List>
          {stack.map(s => (
            <List.Item key={yeast()} as="pre" style={{ fontSize: '75%' }}>
              {highlight(s)}
            </List.Item>
          ))}
        </List>
      )
    stack = (
      <div>
        <Divider />
        <Collapse>
          <Panel key="stack-trace" header="Stack Trace">
            {trace}
          </Panel>
        </Collapse>
      </div>
    )
  }

  const key = `error-${yeast()}`
  notification.error({
    key,
    message: name,
    description: (
      <div>
        {code}
        {message}
        {stack}
      </div>
    ),
    onClose: () => notification.close(key),
  })
}
export default connect(
  {
    error: state`app.error`,
  },
  ({ error = null }) => {
    if (_.isNil(error) || (_.isArray(error) && _.isEmpty(error))) {
      return null
    }
    if (_.isArray(error)) {
      return error.map(process)
    }

    process(error)

    return null
  }
)
