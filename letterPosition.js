
/**
 * str: string that we need to look through
 **/

const letterPosition = function(str) {

  // initialize an empty return object
  let letterPosResult = {};

  let letterPos = 0;
  // iterate through the str and record its positions
  for (const letter of str) {

    if (' ' === letter) {
      // skip space, and increment letter position
      letterPos++;
      continue;
    }

    // letter required so record position in letterPosResult
    if (letterPosResult[letter] === undefined) {
      // console.log("Add entry for: " + letter);
      letterPosResult[letter] = [letterPos];
    } else {
      // console.log("Increment: " + letter);
      letterPosResult[letter].push(letterPos);
    }
    letterPos++;
  }

  return letterPosResult;
};

module.exports = letterPosition;

