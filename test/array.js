const assert = require('assert');

describe("Array", function() {

  describe("#indexOf()", function() {

    it("should return -1 when value is not present", function() {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(undefined));
    });

    it("should return index when value is present", function() {
      assert.equal(1, [1, 2, 3].indexOf(2));
    });

  });

});
