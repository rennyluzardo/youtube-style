const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const port = process.env.PORT || 3000

// With express
const express = require('express')

app.prepare().then(() => {
  express().use(handler).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
