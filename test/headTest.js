const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE for head.js
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(null), null);