request = require('./node_modules/request');

function fetchPage(url, index) {
  var startTime = new Date();

  request(url, function(error, response, body) {
    var endTime = new Date();
    var elapsed = (endTime - startTime) / 1000;

    console.log( "%d\t%s\t%d\t%d\t%ds\t%ds", index, url, response.statusCode, response.body.length, elapsed );
  });
}

var sites = [
  "http://yahoo.com",
  "http://amazon.com",
  "http://google.com",
  "http://apple.com"
];

sites.forEach(function(site, index) { fetchPage(site, index); });
