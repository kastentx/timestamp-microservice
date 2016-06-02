var strftime = require('strftime')
var exports = module.exports = {}

exports.dateType = function(myString) {
  if (/^\d*$/g.test(myString)) {
    return unixOutput(myString)
  } else {
    return 'Not an Unix Epoch.'  
    // nonUnixOutput 
  }
}

var unixOutput = function(epoch) {
    var naturalDate = strftime('%B %e' + ', ' + '%Y', new Date(parseInt(epoch)))
    
  return { unix: epoch
         , natural: naturalDate }
}
