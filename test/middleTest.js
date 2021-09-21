const assert = require('chai').assert;

const middle = require('../middle');

describe("#middle", () => {

  it("returns [24] for [6, 7, 8, 9, 1, 24, 3, 4, 5, 10, 11]", () => {
    assert.deepEqual(middle([6, 7, 8, 9, 1, 24, 3, 4, 5, 10, 11]), [24]);
  });

  it("returns [5, 6] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });
  it("returns [] for [1, 3]", () => {
    assert.deepEqual(middle([1, 3]), []);
  });
  it("returns [2, 2] for [1, 2, 2, 4]", () => {
    assert.deepEqual(middle([1, 2, 2, 4]), [2, 2]);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns ['2'] for [1, '2', 3]", () => {
    assert.deepEqual(middle([1, '2', 3]), ['2']);
  });
  it("returns [\"2\"] for [\"1\", \"2\", \"3\"]", () => {
    assert.deepEqual(middle(["1", "2", "3"]), ["2"]);
  });

  it("returns undefined for \"123\"", () => {
    assert.strictEqual(middle("123"), undefined);
  });
  it("returns undefined for null", () => {
    assert.strictEqual(middle(null), undefined);
  });
  it("returns undefined for null", () => {
    assert.strictEqual(middle(NaN), undefined);
  });
  it("returns undefined for 123", () => {
    assert.strictEqual(middle(123), undefined);
  });
  it("returns undefined for true", () => {
    assert.strictEqual(middle(true), undefined);
  });
  it("returns undefined for new String(123)", () => {
    assert.strictEqual(middle(new String(123)), undefined);
  });

  it("does not change the original array argument", () => {
    const words = ["hello", "world", "lighthouse"];
    middle(words); // no need to capture return value for this test case
    // Make sure the original array was not altered by the middle function
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});