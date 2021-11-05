const express = require('express')
const app = express()
const port = 4000

app.get('/xxx', (request, response) => {
  response.send('你好')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
