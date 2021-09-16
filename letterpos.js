
const assertEqual = function(actual, expected) {

  let failEmoji = '🤬 🤬 🤬';
  let passEmoji = '💚 💚 💚';
  if (actual === expected) {
    console.log(`Assertion Passed: ${passEmoji} [${actual}] === [${expected}]`);
  } else {
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

const assertArraysEqual = function(actual, expected) {

  let failEmoji = '🤬 🤬 🤬';
  let passEmoji = '💚 💚 💚';
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${passEmoji} [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: ${failEmoji} [${actual}] !== [${expected}]`);
  }
};

/**
 * str: string that we need to look through
 **/

const letterPositions = function(str) {

  // initialize an empty return object
  let letterPosResult = {};

  let letterPos = 0;
  // iterate through the str and record its positions
  for (const letter of str) {

    if (' ' === letter) {
      // skip space, and increment letter position
      letterPos++;
      continue;
    }

    // letter required so record position in letterPosResult
    if (letterPosResult[letter] === undefined) {
      // console.log("Add entry for: " + letter);
      letterPosResult[letter] = [letterPos];
    } else {
      // console.log("Increment: " + letter);
      letterPosResult[letter].push(letterPos);
    }
    letterPos++;
  }

  return letterPosResult;
};

// tests
const letterPosResult = letterPositions("lighthouse in the house");

assertArraysEqual(letterPosResult["l"], [0]);
assertArraysEqual(letterPosResult["h"], [3, 5, 15, 18]);
assertEqual(letterPosResult[" "], undefined);
