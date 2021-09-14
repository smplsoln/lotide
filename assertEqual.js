const assertEqual = function(actual, expected) {

  let failEmoji = '🤬 🤬 🤬';
  let passEmoji = '💚 💚 💚';
  if (actual === expected) {
    // console.assert(true, "The actual value is equal to the expected value.");
    // console.log('Assertion Passed: %s [%s] !== [%s]', passEmoji, actual, expected);
    console.log(`Assertion Passed: ${passEmoji} [${actual}] !== [${expected}]`);
  } else {
    // console.assert(false, "The actual value is different from the expected value.");
    // console.log('Assertion Failed: %s [%s] !== [%s]', failEmoji, actual, expected);
    console.log(`Assertion Failed: ${failEmoji} [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Bootcamp");

