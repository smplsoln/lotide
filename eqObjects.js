
const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  if (typeof obj1 !== 'object' || obj1 === null) {
    console.log("Wrong argument! Not an object, obj1: " + obj1);
    return;
  }

  if (typeof obj2 !== 'object' || obj2 === null) {
    console.log("Wrong argument! Not an object, obj2: " + obj2);
    return;
  }

  // if same object
  if (obj1 === obj2) {
    return true;
  }

  if (Object.entries(obj1).length !== Object.entries(obj2).length) {
    return false;
  }

  for (const [key, obj1Value] of Object.entries(obj1)) {
    const obj2Value = obj2[key];
    if (Array.isArray(obj1Value) && Array.isArray(obj2Value)) {
      if (eqArrays(obj1Value, obj2Value)) {
        continue;
      } else {
        return false;
      }
    }

    if ((typeof obj1Value === 'object') && (typeof obj2Value === 'object')) {
      if (eqObjects(obj1Value, obj2Value)) {
        continue;
      } else {
        return false;
      }
    }

    // primitive value comparison
    if (obj1Value !== obj2Value) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;