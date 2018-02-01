import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import _ from 'lodash'

import { Menu, Tooltip } from 'antd'

export default connect(
  {
    currentPage: state`currentPage`,
    navbarClicked: signal`navbarClicked`,
  },
  ({ navbarClicked, currentPage0 }) => {
    const currentPage = _.toLower(currentPage0)
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`nav-${currentPage}`]} style={{ lineHeight: '64px' }}>
        <Menu.Item key="nav-Home" data-tut="nav-home" onClick={() => navbarClicked({ name: 'Home' })}>
          home
        </Menu.Item>
        <Menu.Item key="nav-agents" data-tut="nav-agents" onClick={() => navbarClicked({ name: 'Agents' })}>
          agents
        </Menu.Item>
        <Menu.Item
          key="nav-frameworks"
          data-tut="nav-frameworks"
          active={currentPage === 'Frameworks'}
          onClick={() => navbarClicked({ name: 'Frameworks' })}
        >
          frameworks
        </Menu.Item>
        <Menu.Item
          key="nav-models"
          data-tut="nav-models"
          active={currentPage === 'Models'}
          onClick={() => navbarClicked({ name: 'Models' })}
        >
          models
        </Menu.Item>
        <Menu.Item key="nav-tutorial" onClick={() => navbarClicked({ name: 'Tutorial' })}>
          <Tooltip title="Show CarML tutorial" placement="bottom">
            <span>
              <b>tutorial</b>
            </span>
          </Tooltip>
        </Menu.Item>
        <Menu.Item key="nav-about" data-tut="nav-about" onClick={() => navbarClicked({ name: 'About' })}>
          about
        </Menu.Item>
      </Menu>
    )
  }
)
