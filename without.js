const without = function(source, itemsToRemove) {
  if (!Array.isArray(source)) {
    console.log('Wrong argument! Not an array: source:' + source);
    return;
  }

  if (!Array.isArray(itemsToRemove)) {
    console.log('Wrong argument! Not an array: itemsToRemove:' + itemsToRemove);
    return;
  }

  let resultArr = [];

  for (const srcItm of source) {
    let doRemove = false;
    for (const itmToRemove of itemsToRemove) {
      if (srcItm === itmToRemove) {
        doRemove = true;
        break;
      }
    }
    if (!doRemove) {
      resultArr.push(srcItm);
    }
  }
  return resultArr;
};

module.exports = without;
