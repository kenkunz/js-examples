const fetchPage = require('./fetch-page');

const sites = [
  "http://amazon.com",
  "http://apple.com",
  "http://google.com",
  "http://yahoo.com"
];

sites.forEach(site => {
  fetchPage(site, data => {
    console.log( data.join("\t") );
  });
});
