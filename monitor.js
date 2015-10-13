var fetchPage = require('./fetch-page');

var sites = [
  "http://amazon.com",
  "http://apple.com",
  "http://google.com",
  "http://yahoo.com"
];

sites.forEach(function(site) {
  fetchPage(site, function(data) {
    console.log( data.join("\t") );
  });
});
