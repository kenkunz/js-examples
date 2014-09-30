request = require('./node_modules/request');

module.exports = function fetchPage(url, callback) {
  request(url, function(error, response, body) {
    callback([ url, response.statusCode, response.body.length ]);
  });
}
