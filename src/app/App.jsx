import React from 'react'
import '../styles/global.css'
import '../styles/media.css'
import Layout from '../components/layout/layout'
import CardContainer from '../containers/CardContainer/CardContainer'
import OverviewContainer from '../containers/OverviewContainer/OverviewContainer'

const App = () => {
  return (
    <>
      <Layout>
        <CardContainer />
        <OverviewContainer />
      </Layout>
    </>
  )
}

export default App