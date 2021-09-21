const countLetters = require('../countLetters');
const assert = require('chai').assert;

// tests
const lettersCounts = countLetters("lighthouse in the house");
describe("#countLetters: \"lighthouse in the house\"", () => {

  it("returns 1 for [l]", () => {
    assert.strictEqual(lettersCounts["l"], 1);
  });
  it("returns undefined for [z]", () => {
    assert.strictEqual(lettersCounts["z"], undefined);
  });
  it("returns 4 for [h]", () => {
    assert.strictEqual(lettersCounts["h"], 4);
  });
  it("returns undefined for [ ]", () => {
    assert.strictEqual(lettersCounts[" "], undefined);
  });
});