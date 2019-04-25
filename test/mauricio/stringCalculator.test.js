const assert = require("chai").assert;
const StringCalculator = require("./stringCalculator");

describe("Mauricio's String Calculator", () => {

  it('returns 0 for empty string', () => {
    assert.equal(StringCalculator.add(""), 0);
  });

  it('returns the same value', () => {
    assert.equal(StringCalculator.add("12"), 12);
  });

  it('returns the sum for two values', () => {
    assert.equal(StringCalculator.add("1,3"), 4);
  });

  it('returns the sum for tne values', () => {
    assert.equal(StringCalculator.add("1,2,3,4,5,6,7,8,9,10"), 55);
  });

  it('returns the sum for two values with \n character', () => {
    assert.equal(StringCalculator.add("1\n2"), 3);
  });

  it('returns error for the values with \n character and empty at the end', () => {
    assert.equal(StringCalculator.add("1\n"), "input is NOT ok: 1\n");
  });

  it('returns the sum for four values with \n character and ; as delimeter', () => {
    assert.equal(StringCalculator.add("1\n2;3;4",";"), 10);
  });

  it('returns error for negative values with \n character and ; as delimeter', () => {
    assert.equal(StringCalculator.add("1\n2;-3;-4",";"), "Negatives not allowed: -3,-4");
  });

  it('returns the sum of values with \n character and ; as delimeter but if any value is greater than 1000 it not count', () => {
    assert.equal(StringCalculator.add("1\n2;3;4;1002",";", 1000), 10);
  });

  it('returns the sum of values with \n character and [uno][dos] as delimeter but if any value is greater than 1000 it not count', () => {
    assert.equal(StringCalculator.add("1\n2[uno]3[dos]4[uno]1002","[uno][dos]", 1000), 10);
  });
});
