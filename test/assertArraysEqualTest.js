const assertArraysEqual = require('../assertArraysEqual');
// console.log({assertArraysEqual});

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

assertArraysEqual("123", ["1", "2", "3"]);
assertArraysEqual(null, ["1", "2", "3"]);
assertArraysEqual(NaN, ["1", "2", "3"]);
assertArraysEqual(123, [1, 2, 3]);
assertArraysEqual(true, ["1", "2", "3"]);
assertArraysEqual(new String(123), ["1", "2", "3"]);