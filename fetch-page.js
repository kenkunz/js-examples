import axios from 'axios';

export default async function fetchPage(url) {
  const t0 = new Date();
  const response = await axios.get(url);
  const t1 = new Date();
  const elapsed = (t1 - t0) / 1000;
  return([ url, response.status, response.data.length, elapsed ]);
}
