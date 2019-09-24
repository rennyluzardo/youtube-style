import React from 'react'
import App from 'next/app'
import Layout from '../components/global/Layout'
import '../scss/styles.scss'
import { initStore } from '../config/store'
import flowRight from 'lodash/flowRight'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    )
  }
}

export default flowRight(
  withRedux(initStore)
)(MyApp)
