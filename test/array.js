import assert from 'assert';

describe("Array", () => {

  describe("#indexOf()", () => {

    it("should return -1 when value is not present", () => {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(undefined));
    });

    it("should return index when value is present", () => {
      assert.equal(1, [1, 2, 3].indexOf(2));
    });

  });

});
