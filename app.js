const express = require('express')
const logger = require('./logger')

const app = express()

app.use(logger('dev'))
app.use((request, response, next) => {
  if (request.path === '/') {
    response.send('根目录')
  }
  next()
})

// app.get('/xxx', (request, response, next) => {
//   response.send('xxx 页面')
//   next()
// })

app.route('/xxx')
  .all(() => {})
  .get((request, response, next) => {
    response.send('xxx')
  })
  .post()

app.listen(3000, () => {
  console.log('正在 listen 3000')
})
