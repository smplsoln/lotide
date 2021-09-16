const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1)) {
    console.log('Wrong argument! Not an array: arr1:' + arr1);
    return;
  }

  if (!Array.isArray(arr2)) {
    console.log('Wrong argument! Not an array: arr2:' + arr2);
    return;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const itm1 = arr1[i];
    const itm2 = arr2[i];
    if (itm1 !== itm2) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  if (typeof obj1 !== 'object' || obj1 === null) {
    console.log("Wrong argument! Not an object, obj1: " + obj1);
    return;
  }

  if (typeof obj2 !== 'object' || obj2 === null) {
    console.log("Wrong argument! Not an object, obj2: " + obj2);
    return;
  }

  // if same object
  if (obj1 === obj2) {
    return true;
  }

  if (Object.entries(obj1).length !== Object.entries(obj2).length) {
    return false;
  }

  for (const [key, obj1Value] of Object.entries(obj1)) {
    const obj2Value = obj2[key];
    if (Array.isArray(obj1Value) && Array.isArray(obj2Value)) {
      if (eqArrays(obj1Value, obj2Value)) {
        continue;
      } else {
        return false;
      }
    }

    if ((typeof obj1Value === 'object') && (typeof obj2Value === 'object')) {
      if (eqObjects(obj1Value, obj2Value)) {
        continue;
      } else {
        return false;
      }
    }

    // primitive value comparison
    if (obj1Value !== obj2Value) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let failEmoji = '🤬 🤬 🤬';
  let passEmoji = '💚 💚 💚';
  if (eqObjects(actual, expected)
    || (actual === undefined && expected === undefined)
    || (actual === null && expected === null)) {
    console.log(`Assertion Passed: ${passEmoji} [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`Assertion Failed: ${failEmoji} [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};


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