request = require('./node_modules/request');

function fetchPage(url) {
  request(url, function(error, response, body) {
    console.log( "%s\t%d\t%d", url, response.statusCode, response.body.length );
  });
}

var sites = [
  "http://yahoo.com",
  "http://amazon.com",
  "http://google.com",
  "http://apple.com"
];

sites.forEach(function(site) {
  fetchPage(site);
});
