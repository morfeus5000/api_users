//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send({user:'palmeida',password: 'd23ds312a113wsdS'})
})

//Launch listening server on port 5800
app.listen(5800, function () {
  console.log('app listening on port 5800!')
})
