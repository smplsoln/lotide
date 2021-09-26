// const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, fn) => {

  let resArr = [];
  for (const itm of arr) {
    resArr.push(fn(itm));
  }
  return resArr;
};

const results1 = map(words, word => word[0]);
// console.log(results1);
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

module.exports = { map };