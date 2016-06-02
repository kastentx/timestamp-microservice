
// # # # # # # # # # # # # # #
// # TimeStamp MicroService  #
// #    By: Nick Kasten      #
// # # # # # # # # # # # # # #

var timeStamp = require('./timestamp.js')
var express = require('express');
var app = express();
var portNum = process.env.PORT || 5000;
var stringMe = "Hello String!";

/* serves main page */
app.get('/', function (req, res) {
  res.sendfile('index.html');
})

/* gets user input from parameter passed thru URL */
app.get('/:inputString', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(timeStamp.dateType(req.param('inputString'))));
  //res.send(dateCheck(req.param('inputString')));
})
.listen(portNum, function() {
  console.log("Listening on " + portNum);  
});
