const assertEqual = function(actualArr, expectedArr) {
  const actual = (actualArr === undefined) ? undefined : (actualArr === null) ? null : actualArr.toString();
  const expected = (expectedArr === undefined) ? undefined : (expectedArr === null) ? null : expectedArr.toString();

  let failEmoji = '🤬 🤬 🤬';
  let passEmoji = '💚 💚 💚';
  if (actual === expected) {
    console.log(`Assertion Passed: ${passEmoji} [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: ${failEmoji} [${actual}] !== [${expected}]`);
  }
};

const tail = function(arr) {
  return (null === arr) ? null
    : (undefined === arr) ? undefined
      : (0 === arr.length) ? []
        : (1 === arr.length) ? []
          : arr.slice(1);
};

// TEST CODE
assertEqual(tail([5,6,7]), [6, 7]);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

assertEqual(tail(["Hello"]), []);
assertEqual(tail([]), []);
assertEqual(tail(undefined), undefined);
assertEqual(tail(null), null);

