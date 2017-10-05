const request = require('./node_modules/request');

module.exports = function fetchPage(url, callback) {
  const t0 = new Date();
  request(url, function(error, response, body) {
    const t1 = new Date();
    const elapsed = (t1 - t0) / 1000;
    callback([ url, response.statusCode, response.body.length, elapsed ]);
  });
}
