const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');


assertArraysEqual(without([1, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, 2, 4, 5], [5, 2]), [1, 4]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, 3], [1, 2, '3']), [3]);
assertArraysEqual(without(["1", "2", "3"], ["3"]), ["1", "2"]);

assertEqual(without("123", ["1", "2", "3"]), undefined);
assertEqual(without(null, ["1", "2", "3"]), undefined);
assertEqual(without(NaN, ["1", "2", "3"]), undefined);
assertEqual(without(123, [1, 2, 3]), undefined);
assertEqual(without(true, ["1", "2", "3"]), undefined);
assertEqual(without(new String(123), ["1", "2", "3"]), undefined);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);