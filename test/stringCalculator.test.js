const assert = require("chai").assert;
const StringCalculator = require("../1 - TDD/stringCalculator");

describe("String Calculator", () => {
    it('empty string returns 0', () => {
        assert.equal(StringCalculator.add(""), 0);
    });
});