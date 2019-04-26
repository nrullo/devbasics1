const assert = require("chai").assert;
const expect = require("chai").expect;
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

    it('input \",,,,,,,,,,\" returns 0', () => {
        assert.equal(StringCalculator.add(",,,,,,,,,,"), 0);
    });

    it('input \"0,0,0,0,0,0,0,0\" returns 0', () => {
        assert.equal(StringCalculator.add("0,0,0,0,0,0,0,0"), 0);
    });

    it('input \"1,2,3\" returns 6', () => {
        assert.equal(StringCalculator.add("1,2,3"), 6);
    });

    it('input \"0,1,2,3,4,5,6,7,8,9\" returns 45', () => {
        assert.equal(StringCalculator.add("0,1,2,3,4,5,6,7,8,9"), 45);
    });

    it('input \"1,1,1,1,1,1,1,1,1,1,1,1,1,1,1\" returns 15', () => {
        assert.equal(StringCalculator.add("1,1,1,1,1,1,1,1,1,1,1,1,1,1,1"), 15);
    });

    it('input \"1\n2,3\" returns 6', () => {
        assert.equal(StringCalculator.add("1\n2,3"), 6);
    });

    it('input \"1\n21,3\" returns 25', () => {
        assert.equal(StringCalculator.add("1\n21,3"), 25);
    });

    it('input \"0,1\n2,3,4\n5,6,7,8\n9\" returns 45', () => {
        assert.equal(StringCalculator.add("0,1\n2,3,4\n5,6,7,8\n9"), 45);
    });

    it('input \"//;\n1;2\" returns 3', () => {
        assert.equal(StringCalculator.add("//;\n1;2"), 3);
    });

    it('input \"//X\n1X2,4\" returns 7', () => {
        assert.equal(StringCalculator.add("//X\n1X2,4"), 7);
    });

    it('input \"//SEP\n1SEP2SEP20,30\" returns 53', () => {
        assert.equal(StringCalculator.add("//SEP\n1SEP2SEP20,30"), 53);
    });

    it('one negative number expect return an error message and the negative number', () => {
        expect(() => StringCalculator.add("-1")).to.throw('negatives not allowed: -1');
    });

    it('negative numbers expect an error message and the negative numbers', () => {
        expect(() => StringCalculator.add("-1,-10")).to.throw('negatives not allowed: -1, -10');
    });

    it('input \"2,1001\" returns 2, ignoring numbers bigger than 1000', () => {
        assert.equal(StringCalculator.add("2,1001"), 2);
    });
});