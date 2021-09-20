// const eqArrays = require('./eqArrays');

// const assertArraysEqual = require('./assertArraysEqual');

// const assertEqual = require('./assertEqual');

const middle = function(arr) {
  const midArr = [];

  if (!Array.isArray(arr)) {
    console.log('Wrong argument! Not an array: ' + arr);
    return;
  }

  if (arr.length < 3) {
    return midArr;
  }

  let isArrLengthEven = (arr.length % 2 === 0) ? true : false;

  let mid = (isArrLengthEven ? (arr.length / 2)
                                : (arr.length + 1) / 2);

  midArr.push(arr[mid - 1]);

  if (isArrLengthEven) {
    midArr.push(arr[mid]);
  }
  return midArr;
};

module.exports = middle;
