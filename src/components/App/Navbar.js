import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

import { Container, Menu, Popup } from 'semantic-ui-react'

const fontFamily = '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif'

export default connect(
  {
    currentPage: state`currentPage`,
    navbarClicked: signal`navbarClicked`,
  },
  ({ navbarClicked, currentPage }) => (
    <div className="App-menu">
      <Container>
        <Menu
          inverted
          pointing
          secondary
          style={{
            borderColor: '#0DB7C4',
          }}
        >
          <Menu.Item
            name="home"
            data-tut="nav-home"
            active={currentPage === 'Home'}
            onClick={() => navbarClicked({ name: 'Home' })}
            style={{
              fontFamily,
            }}
          />
          <Menu.Item
            name="agents"
            data-tut="nav-agents"
            active={currentPage === 'Agents'}
            onClick={() => navbarClicked({ name: 'Agents' })}
            style={{
              fontFamily,
            }}
          />
          <Menu.Item
            name="frameworks"
            data-tut="nav-frameworks"
            active={currentPage === 'Frameworks'}
            onClick={() => navbarClicked({ name: 'Frameworks' })}
            style={{
              fontFamily,
            }}
          />
          <Menu.Item
            name="models"
            data-tut="nav-models"
            active={currentPage === 'Models'}
            onClick={() => navbarClicked({ name: 'Models' })}
            style={{
              fontFamily,
            }}
          />
          <Menu.Menu position="right">
            <Popup
              inverted
              trigger={
                <Menu.Item
                  name="Tutorial"
                  as="b"
                  active={currentPage === 'Tutorial'}
                  onClick={() => navbarClicked({ name: 'Tutorial' })}
                  style={{
                    fontFamily,
                  }}
                />
              }
              content="Show CarML tutorial"
              position="bottom center"
            />
            <Menu.Item
              name="About"
              data-tut="nav-about"
              active={currentPage === 'About'}
              onClick={() => navbarClicked({ name: 'About' })}
              style={{
                fontFamily,
              }}
            />
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  )
)
