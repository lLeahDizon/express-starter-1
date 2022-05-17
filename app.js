const express = require('express')

const app = express()

app.use((request, response, next) => {
  console.log(request.url)
  response.write('hi')
  next()
})

app.use((request, response, next) => {
  console.log(2)
  response.write('hi')
  response.end()
})

app.listen(3000, () => {
  console.log('正在 listen 3000')
})
