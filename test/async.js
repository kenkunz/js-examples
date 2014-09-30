var assert = require('assert');
var async = require('../async');

describe("anync", function() {
  it("should call the callback with 1", function(done) {
    async(function(val) {
      if (val === 1) {
        done();
      } else {
        throw Error("whoa!");
      }
    });
  });


});
