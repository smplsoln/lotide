
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
 * allItems: an array of strings that we need to look through
 * // itemsToCount: an object specifying what to count
 *
 **/

const countOnly = function(allItems, itemsToCount) {

  // initialize an empty return object
  let itemsPresent = {};

  // iterate through the allItems array and count
  // the number of times this key is present

  for (const item of allItems) {
    console.log(item);
    const requiredItem = itemsToCount[item];
    if (requiredItem === undefined || requiredItem === false) {
      // not required, continue to next item
      continue;
    }

    // item required so add/increment in itemsPresent result
    if (itemsPresent[item] !== undefined) {
      // console.log("Increment: " + item);
      itemsPresent[item] += 1;
    } else {
      // console.log("Add entry for: " + item);
      itemsPresent[item] = 1;
    }
  }

  // after all present keys are done return the itemsPresent array
  return itemsPresent;
};


// tests

const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
const namesToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

const result1 = countOnly(firstNames, namesToCount);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
