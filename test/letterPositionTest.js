const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const letterPosition = require('../letterPosition');

// tests
const letterPosResult = letterPosition("lighthouse in the house");

assertArraysEqual(letterPosResult["l"], [0]);
assertArraysEqual(letterPosResult["h"], [3, 5, 15, 18]);
assertEqual(letterPosResult[" "], undefined);
