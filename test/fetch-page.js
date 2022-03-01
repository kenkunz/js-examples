import assert from 'assert';
import fetchPage from '../fetch-page.js';
import { createServer } from 'http';
import { useFakeTimers } from 'sinon';

describe('fetchPage', () => {
  let server, clock;

  beforeEach(() => {
    server = createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(9000);

    clock = useFakeTimers();
  });

  afterEach(() => {
    server.close();
    clock.restore();
  });

  it("should return the url as the first array element", async () =>  {
    const data = await fetchPage("http://localhost:9000");
    assert.equal("http://localhost:9000", data[0]);
  });

  it("should return the status code as second element", async () => {
    const data = await fetchPage("http://localhost:9000");
    assert.equal(200, data[1]);
  });

  it("should return the response body size as third element", async () => {0
    const data = await fetchPage("http://localhost:9000");
    const expectedLength = 'Hello World\n'.length;
    assert.equal(expectedLength, data[2]);  
  });

  it("should return the elapsed request time in seconds as fourth element", async () => {
    const result = fetchPage("http://localhost:9000");
    clock.tick(1250);
    const data = await result;
    assert.equal(1.25, data[3]);
  });
});
