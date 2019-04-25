const assert = require("chai").assert;
const StringCalculator = require("./stringCalculator");

describe("String Calculator", () => {
    it('empty string returns 0', () => {
        assert.equal(StringCalculator.add(""), 0);
    });

    it('input \"1\" returns 1', () => {
        assert.equal(StringCalculator.add("1"), 1);
    });

    it('input \"0,0\" returns 0', () => {
        assert.equal(StringCalculator.add("0,0"), 0);
    });

    it('input \"3,3\" returns 6', () => {
        assert.equal(StringCalculator.add("3,3"), 6);
    });

    it('input \"5,10\" returns 15', () => {
        assert.equal(StringCalculator.add("5,10"), 15);
    });

    it('input \"99,1\" returns 100', () => {
        assert.equal(StringCalculator.add("99,1"), 100);
    });
});