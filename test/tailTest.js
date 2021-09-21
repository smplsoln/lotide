const tail = require('../tail');

const assert = require('chai').assert;

// TEST CODE for tail.js

describe("#tail", () => {

  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });

  it("returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for [\"Hello\"]", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns undefined for undefined", () => {
    assert.deepEqual(tail(undefined), undefined);
  });

  it("returns null for null", () => {
    assert.deepEqual(tail(null), null);
  });

});
