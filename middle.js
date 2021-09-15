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

const middle = function(arr) {
  const mid = [];

  if (!Array.isArray(arr)) {
    console.log('Wrong argument! Not an array: ' + arr);
    return;
  }

  if (arr.length < 3) {
    return mid;
  }

  let midIndex = Math.round(arr.length / 2);
  let isEvenLength = (arr.length % 2 === 0) ? true : false;

  mid.push(arr[midIndex - 1]);

  if (isEvenLength) {
    mid.push(arr[midIndex]);
  }
  return mid;
};

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