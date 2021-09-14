
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

const assertArraysEqual = function(actual, expected) {

  let failEmoji = '🤬 🤬 🤬';
  let passEmoji = '💚 💚 💚';
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${passEmoji} [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: ${failEmoji} [${actual}] !== [${expected}]`);
  }
};

const assertEqual = function(actual, expected) {

  let failEmoji = '🤬 🤬 🤬';
  let passEmoji = '💚 💚 💚';
  if (actual === expected) {
    console.log(`Assertion Passed: ${passEmoji} [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: ${failEmoji} [${actual}] !== [${expected}]`);
  }
};


const without = function(source, itemsToRemove) {
  if (!Array.isArray(source)) {
    console.log('Wrong argument! Not an array: source:' + source);
    return;
  }

  if (!Array.isArray(itemsToRemove)) {
    console.log('Wrong argument! Not an array: itemsToRemove:' + itemsToRemove);
    return;
  }

  let resultArr = [];

  for (const srcItm of source) {
    let doRemove = false;
    for (const itmToRemove of itemsToRemove) {
      if (srcItm === itmToRemove) {
        doRemove = true;
        break;
      }
    }
    if (!doRemove) {
      resultArr.push(srcItm);
    }
  }
  return resultArr;
};


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
