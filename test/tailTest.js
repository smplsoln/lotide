const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// TEST CODE for tail.js
assertArraysEqual(tail([5,6,7]), [6, 7]);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]);

assertArraysEqual(tail(["Hello"]), []);
assertArraysEqual(tail([]), []);
assertEqual(tail(undefined), undefined);
assertEqual(tail(null), null);