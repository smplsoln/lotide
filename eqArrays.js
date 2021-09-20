
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

module.exports = eqArrays;