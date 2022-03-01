import axios from 'axios';

export default function fetchPage(url, callback) {
  return new Promise((resolve, reject) => {
    const t0 = new Date();
    axios.get(url)
      .then(response => {
        const t1 = new Date();
        const elapsed = (t1 - t0) / 1000;
        resolve([ url, response.status, response.data.length, elapsed ]);
      })
      .catch(reject);
  });
}
