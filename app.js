const express = require('express')
const logger = require('./logger')

const app = express()

app.use(logger('dev'))
app.use((request, response, next) => {
  next()
})
app.use((request, response, next) => {
  if (true) {
    next('未登录')
  } else
    next()
})

app.use((request, response, next) => {
  response.write('3')
  next()
})

app.use((error, request, response, next) => {
  if (response.headersSent) {
    return next(error)
  }
  response.status(500)
  response.send(error)
})

app.listen(3000, () => {
  console.log('正在 listen 3000')
})
