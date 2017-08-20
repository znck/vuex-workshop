const http = require('http')
const express = require('express')
const products = require('./products.json')

const app = express()

app.get('/api/products', (_, res) => res.json(Object.values(products)))

app.get('/api/products/:id', ({ params: { id } }, res) => {
  if (id in products) return res.json(products[id])

  res.statusCode = 404
  res.json({ error: { status: 404, message: 'Not Found' } })
})

const server = http.createServer(app)
const PORT = 9000

server.on('error', error => {
  console.error(`Server exiting with`, error)
  process.exit(500)
})

server.listen(PORT, error => {
  console.log(`Running on port: ${PORT}`)
  if (error) {
    return console.error('Sever failed to start.', error)
  }
  console.log('Server started successfully.')
})
