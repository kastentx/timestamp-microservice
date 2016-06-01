
// # # # # # # # # # # # # # #
// # TimeStamp MicroService  #
// #    By: Nick Kasten      #
// # # # # # # # # # # # # # #

var express = require('express');
var app = express();
var portNum = process.env.PORT || 5000;
var stringMe = "Hello String!";

/* serves main page */
app.get('/', function (req, res) {
  res.sendfile('index.html');
})

app.get('/home', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ stringMe }));
})
.listen(portNum, function() {
  console.log("Listening on " + portNum);  
});
