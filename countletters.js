
const assertEqual = function(actual, expected) {

  let failEmoji = '🤬 🤬 🤬';
  let passEmoji = '💚 💚 💚';
  if (actual === expected) {
    console.log(`Assertion Passed: ${passEmoji} [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: ${failEmoji} [${actual}] !== [${expected}]`);
  }
};

/**
 * str: an array of strings that we need to look through
 * // lettersToCount: an object specifying what to count
 *
 **/

const countLetters = function(str) {

  // initialize an empty return object
  let lettersPresent = {};

  // iterate through the str array and count
  // the number of times this key is present

  for (const letter of str) {
    // console.log(letter);

    if (' ' === letter) {
      // skip counting space
      continue;
    }

    // letter required so add/increment in lettersPresent result
    if (lettersPresent[letter] === undefined) {
      // console.log("Add entry for: " + letter);
      lettersPresent[letter] = 1;
    } else {
      // console.log("Increment: " + letter);
      lettersPresent[letter] += 1;
    }
  }

  return lettersPresent;
};

// tests
const lettersCounts = countLetters("lighthouse in the house");

assertEqual(lettersCounts["l"], 1);
assertEqual(lettersCounts["z"], undefined);
assertEqual(lettersCounts["h"], 4);
assertEqual(lettersCounts[" "], undefined);
