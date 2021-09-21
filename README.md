# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @prashantarane/lotide`

**Require it:**

`const _ = require('@prashantarane/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: gives head of given array
* `tail(array)`: gives tail of given array
* `middle(array)`: gives middle of given array
* `countLetters(string)`: gives the counts of all the letters in the given string
* `countOnly(arrayOfGivenStrings, arrayOfStringsToCount)`: gives the counts of the required strings in the given array of strings
* `findKeyByValue(object, valueString)`: finds the key of a value in given object matching the given valueString
* `letterPosition(string)`: gives the positions/indexes of all the letters in a given string
* `assertEqual(param1, param2)`: checks if given 2 parameters are equal
* `eqArrays(array1, array2)`: checks if given 2 arrays are equal
* `assertArraysEqual(array1, array2)`: asserts if given 2 arrays are equal
* `eqObjects(obj1, obj2)`: checks if given 2 objects are equal
* `assertObjectsEqual(obj1, obj2)`: asserts if given 2 objects are equal
* `without(sourceArray, itemsToRemove)`: returns the remaining array after removing all the items mentioned in itemsToremove from the sourceArray