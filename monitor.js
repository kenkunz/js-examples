import fetchPage from './fetch-page.js';

const sites = [
  'http://amazon.com',
  'http://apple.com',
  'http://google.com',
  'http://yahoo.com'
];

for (const site of sites) {
  fetchPage(site).then((data) => {
    console.log( data.join('\t') );
  });
}
