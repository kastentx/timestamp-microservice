var strftime = require('strftime')
var exports = module.exports = {}

exports.dateType = function(userInput) {
  if (/^\d*$/g.test(userInput)) {
    return unixOutput(userInput)
  } else if (/[a-zA-Z]+\s\d{1,2}[,]?\s\d{1,4}/.test(userInput)){
    return naturalOutput(userInput)
  } else {
      return nullOutput()
  }
}

var unixOutput = function(epoch) {
  var unixEpoch = epoch * 1000
  var naturalDate = strftime('%B %e' + ', ' + '%Y', new Date(unixEpoch))
  return { unix: parseInt(epoch)
         , natural: naturalDate }
}

var naturalOutput = function(date) {
  var unixEpoch = strftime('%s', new Date(date))
  var naturalDate = strftime('%B %e' + ', ' + '%Y', new Date(date))
  return { unix: parseInt(unixEpoch)
         , natural: naturalDate }
}

var nullOutput = function () {
  return { unix: null
         , natural: null }    
}