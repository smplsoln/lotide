const assertEqual = function(actual, expected) {

  let failEmoji = '🤬 🤬 🤬';
  let passEmoji = '💚 💚 💚';
  if (actual === expected) {
    // console.assert(true, "The actual value is equal to the expected value.");
    // console.log('Assertion Passed: %s [%s] !== [%s]', passEmoji, actual, expected);
    console.log(`Assertion Passed: ${passEmoji} [${actual}] === [${expected}]`);
  } else {
    // console.assert(false, "The actual value is different from the expected value.");
    // console.log('Assertion Failed: %s [%s] !== [%s]', failEmoji, actual, expected);
    console.log(`Assertion Failed: ${failEmoji} [${actual}] !== [${expected}]`);
  }
};

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