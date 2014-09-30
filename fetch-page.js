request = require('./node_modules/request');

module.exports = function fetchPage(url, callback) {
  var t0 = new Date();
  request(url, function(error, response, body) {
    var t1 = new Date();
    var elapsed = (t1 - t0) / 1000;
    callback([ url, response.statusCode, response.body.length, elapsed ]);
  });
}
