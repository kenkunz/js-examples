const assert = require('assert');
const callMeBack = require('../call-me-back');

describe("callMeBack", function() {

  // try changing below to call async to see that this approach fails for async code
  describe("sync", function() {
    it("should call the callback with 1", function() {
      let returnVal;

      callMeBack.sync(function(val) {
        returnVal = val;
      });

      assert.equal(1, returnVal);
    });
  });

  // use done() to properly test async code
  describe("async", function() {
    it("should call the callback with 1", function(done) {
      callMeBack.async(function(val) {
        assert.equal(1, val);
        done();
      });
    });
  });

});
