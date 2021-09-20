const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE for eqArrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

assertEqual(eqArrays("123", ["1", "2", "3"]), undefined);
assertEqual(eqArrays(null, ["1", "2", "3"]), undefined);
assertEqual(eqArrays(NaN, ["1", "2", "3"]), undefined);
assertEqual(eqArrays(123, [1, 2, 3]), undefined);
assertEqual(eqArrays(true, ["1", "2", "3"]), undefined);

assertEqual(eqArrays(new String(123), ["1", "2", "3"]), undefined);