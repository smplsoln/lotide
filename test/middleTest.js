const assertArraysEqual = require('../assertArraysEqual');

const assertEqual = require('../assertEqual');

const middle = require('../middle');

assertArraysEqual(middle([6, 7, 8, 9, 1, 24, 3, 4, 5, 10, 11]), [24]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
assertArraysEqual(middle([1, 3]), []);
assertArraysEqual(middle([1, 2, 2, 4]), [2, 2]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, '2', 3]), ['2']);
assertArraysEqual(middle(["1", "2", "3"]), ["2"]);

assertEqual(middle("123"), undefined);
assertEqual(middle(null), undefined);
assertEqual(middle(NaN), undefined);
assertEqual(middle(123), undefined);
assertEqual(middle(true), undefined);
assertEqual(middle(new String(123)), undefined);

const words = ["hello", "world", "lighthouse"];
middle(words); // no need to capture return value for this test case
// Make sure the original array was not altered by the middle function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);