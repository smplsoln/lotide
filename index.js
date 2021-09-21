const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue');
const letterPosition = require('./letterPosition');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const without = require('./without');


module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  countLetters: countLetters,
  eqObjects: eqObjects,
  assertEqual: assertEqual,
  countOnly: countOnly,
  findKeyByValue: findKeyByValue,
  letterPosition: letterPosition,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  without: without
};