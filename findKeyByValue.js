const findKeyByValue = function(obj, valStr) {
  for (const [key, value] of Object.entries(obj)) {
    if (value === valStr) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
