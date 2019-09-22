const withSass = require('@zeit/next-sass')
const path = require('path')
const webpack = require('webpack')

module.exports = withSass({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.scss/,
      loader: 'import-glob-loader'
    })
    return config
  }
})
