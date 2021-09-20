const head = function(arr) {
  return (null === arr) ? null
    : (undefined === arr) ? undefined
      : arr[0];
};

module.exports = head;