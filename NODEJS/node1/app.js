var express = require('express')
var app = express()

var date = new Date();
var stringDate = date.toDateString();
var isoDate= date.toISOString();
var datetotal = stringDate + "        " + isoDate;

var myLogger = function (req, res, next) {
  console.log('PASSED')
  next()
}

app.use(myLogger)
app.get('/', function (req, res) {
  res.send(datetotal)
})
app.listen(3000, function() {
	console.log('Listen on port 3000')
})