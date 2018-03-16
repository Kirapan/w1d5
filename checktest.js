

var assert = require("chai").assert;
var check = require("./check.js");

describe("check", function() {
  it("should return true if number is valid", function() {
    var number = 688234;
    var result = check(number);
    assert.isTrue(result);
  });

  it("should return false if a number is NOT valid", function() {
    var output = check(234521);
    assert.isFalse(output);
  });

  it("should return false if number is not a number", function() {
    var ok = check("panama");
    assert.isFalse(ok);
  });

});
