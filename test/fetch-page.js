var assert = require('assert');
var fetchPage = require('../fetch-page');
var http = require('http');

describe('fetchPage', function() {
  var server;

  beforeEach(function() {
    server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(9000, '127.0.0.1');
  });

  afterEach(function() {
    server.close();
  });

  it("should return the url as the first array element", function(done) {
    fetchPage("http://localhost:9000", function(data) {
      assert.equal("http://localhost:9000", data[0]);
      done();
    });
  });

});
