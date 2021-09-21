const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

// tests

// for primitive values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, ab);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

assertObjectsEqual(undefined, abc);
assertObjectsEqual(undefined, undefined);
assertObjectsEqual(ab, undefined);

assertObjectsEqual(null, abc);
assertObjectsEqual(null, null);
assertObjectsEqual(ab, null);

// for Arrays values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd2, cd);

// for Obj values
const ef = { c: "1", d: { xx: 3 } };
const gh = { d: { xx: 3 }, c: "1" };
assertObjectsEqual(gh, ef);

const efgobj = { c: "1", d: { xx: 3, yy: 4 } };
assertObjectsEqual(efgobj, ef);