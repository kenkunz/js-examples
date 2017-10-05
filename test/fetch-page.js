const assert = require('assert');
const fetchPage = require('../fetch-page');
const http = require('http');
const sinon = require('sinon');

describe('fetchPage', function() {
  let server, clock;

  beforeEach(function() {
    server = http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(9000, '127.0.0.1');

    clock = sinon.useFakeTimers();
  });

  afterEach(function() {
    server.close();
    clock.restore();
  });

  it("should return the url as the first array element", function(done) {
    fetchPage("http://localhost:9000", function(data) {
      assert.equal("http://localhost:9000", data[0]);
      done();
    });
  });

  it("should return the status code as second element", function(done) {
    fetchPage("http://localhost:9000", function(data) {
      assert.equal(200, data[1]);
      done();
    });
  });

  it("should return the response body size as third element", function(done) {
    fetchPage("http://localhost:9000", function(data) {
      var responseSize = 'Hello World\n'.length;
      assert.equal(responseSize, data[2]);
      done();
    });
  });

  it("should return the elapsed request time in seconds as fourth element", function(done) {
    fetchPage("http://localhost:9000", function(data) {
      assert.equal(1.25, data[3]);
      done();
    });

    clock.tick(1250);
  });

});
