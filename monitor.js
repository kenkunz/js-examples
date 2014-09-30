var fetchPage = require('./fetch-page');

var sites = [
  "http://yahoo.com",
  "http://amazon.com",
  "http://google.com",
  "http://apple.com"
];

sites.forEach(function(site) {
  fetchPage(site, function(data) {
    console.log( data.join("\t") );
  });
});
