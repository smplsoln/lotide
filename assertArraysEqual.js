
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