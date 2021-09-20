const eqArrays = require('./eqArrays');
// console.log({eqArrays});

const assertArraysEqual = function(actual, expected) {

  let failEmoji = '🤬 🤬 🤬';
  let passEmoji = '💚 💚 💚';
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${passEmoji} [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: ${failEmoji} [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;