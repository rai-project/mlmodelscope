import React from 'react'
import { Helmet } from 'react-helmet'

import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import { Layout, BackTop, Icon } from 'antd'
import styled from 'styled-components'

import Navbar from './Navbar'
import Title from './Title'
import {
  FrameworkSummaryPage,
  HomePage,
  ModelInformationPage,
  ModelSummaryPage,
  PredictionResultsPage,
  AgentPage,
  AgentsPage,
  AboutPage,
} from '../Pages'
import Snackbar from './Snackbar'

import carmlImage from '../../assets/images/carml_small.png'
import c3srImage from '../../assets/images/C3SR_color.jpg'
import uiucImage from '../../assets/images/uiuc_logo_small.png'

const { Header, Footer, Content } = Layout

const Body = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`

export default connect(
  {
    // eslint-disable-next-line
    currentPage: state`currentPage`,
    appLoaded: signal`appLoaded`,
    appName: state`name`,
    websiteUrl: state`websiteUrl`,
  },
  class App extends React.Component {
    componentDidMount() {
      // this.props.appLoaded();
    }
    render() {
      let Page = null
      switch (this.props.currentPage) {
        case 'Models':
          Page = ModelSummaryPage
          break
        case 'ModelInformation':
          Page = ModelInformationPage
          break
        case 'PredictionResults':
          Page = PredictionResultsPage
          break
        case 'Frameworks':
          Page = FrameworkSummaryPage
          break
        case 'About':
          Page = AboutPage
          break
        case 'Agents':
          Page = AgentsPage
          break
        case 'Agent':
          Page = AgentPage
          break
        case 'Tutorial':
        default:
          Page = HomePage
          break
      }
      return (
        <Body>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.props.appName}</title>
            <link rel="canonical" href={this.props.websiteUrl} />
          </Helmet>
          <Layout>
            <Header style={{ position: 'fixed', width: '100%' }}>
              <Navbar />
            </Header>
            <main>
              <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Snackbar />
                <Layout>
                  <BackTop />
                  <Title />
                  <Page key={`page-${this.props.currentPage}`} />
                </Layout>
              </Content>
            </main>
            {false && (
              <Footer>
                <img
                  src={carmlImage}
                  size="tiny"
                  floated="right"
                  alt="carml"
                  href="https://github.com/rai-project/carml"
                />
                <img
                  src={c3srImage}
                  size="small"
                  floated="right"
                  alt="illinois"
                  href="http://c3sr.hwu.crhc.illinois.edu"
                />
                <img
                  src={uiucImage}
                  size="small"
                  floated="right"
                  alt="impact"
                  href="http://impact.crhc.illinois.edu/"
                />
                <h3>
                  <Icon name="github" />
                  rai-project/carml
                </h3>
              </Footer>
            )}
          </Layout>
        </Body>
      )
    }
  }
)
