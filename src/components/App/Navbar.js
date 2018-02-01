import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import _ from 'lodash'

import { Menu, Tooltip } from 'antd'

function toTitle(s) {
  return _.toUpper(_.first(s)) + _.toLower(s.slice(1))
}

export default connect(
  {
    currentPage: state`currentPage`,
    navbarClicked: signal`navbarClicked`,
  },
  ({ navbarClicked, currentPage0 }) => {
    const currentPage = _.toLower(currentPage0)
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[`nav-${currentPage}`]}
        style={{ lineHeight: '64px' }}
        onClick={({ key }) => navbarClicked({ name: toTitle(key.replace(/nav-/, '')) })}
      >
        <Menu.Item key="nav-Home" data-tut="nav-home">
          home
        </Menu.Item>
        <Menu.Item key="nav-agents" data-tut="nav-agents">
          agents
        </Menu.Item>
        <Menu.Item key="nav-frameworks" data-tut="nav-frameworks" active={currentPage === 'Frameworks'}>
          frameworks
        </Menu.Item>
        <Menu.Item key="nav-models" data-tut="nav-models" active={currentPage === 'Models'}>
          models
        </Menu.Item>
        <Menu.Item key="nav-tutorial">
          <Tooltip title="Show CarML tutorial" placement="bottom">
            <span>
              <b>tutorial</b>
            </span>
          </Tooltip>
        </Menu.Item>
        <Menu.Item key="nav-about" data-tut="nav-about">
          about
        </Menu.Item>
      </Menu>
    )
  }
)
