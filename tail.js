const tail = function(arr) {
  return (null === arr) ? null
    : (undefined === arr) ? undefined
      : (0 === arr.length) ? []
        : (1 === arr.length) ? []
          : arr.slice(1);
};

module.exports = tail;
