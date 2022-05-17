const logger = function (request, response, next) {
  console.log(request.url)
  next()
}
