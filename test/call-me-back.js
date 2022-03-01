import assert from 'assert';
import callMeBack from '../call-me-back.js';

describe("callMeBack", () => {

  // try changing below to call async to see that this approach fails for async code
  describe("sync", () => {
    it("should call the callback with 1", () => {
      let returnVal;

      callMeBack.sync(function(val) {
        returnVal = val;
      });

      assert.equal(1, returnVal);
    });
  });

  describe("async", () => {
    it("should call the callback with 1", (done) => {
      callMeBack.async(function(val) {
        assert.equal(1, val);
        done();
      });
    });
  });

});
