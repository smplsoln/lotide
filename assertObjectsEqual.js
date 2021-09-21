const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;
