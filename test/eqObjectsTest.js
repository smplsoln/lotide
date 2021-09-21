const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');
// tests

// for primitive values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, ab), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

assertEqual(eqObjects(undefined, abc), undefined);
assertEqual(eqObjects(undefined, undefined), undefined);
assertEqual(eqObjects(ab, undefined), undefined);

assertEqual(eqObjects(null, abc), undefined);
assertEqual(eqObjects(null, null), undefined);
assertEqual(eqObjects(ab, null), undefined);

// for Arrays values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd2, cd), false);

// for Obj values
const ef = { c: "1", d: { xx: 3 } };
const gh = { d: { xx: 3 }, c: "1" };
assertEqual(eqObjects(gh, ef), true);

const efgobj = { c: "1", d: { xx: 3, yy: 4 } };
assertEqual(eqObjects(efgobj, ef), false);