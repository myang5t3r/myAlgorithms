// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function (arrA, arrB) {
  for (i = 0; i < arrA.length; i++) {
    for (j = 0; j < arrB.length; j++) {
      if (arrA[i] === arrB[j]) {
        return arrA[i];
      }
    }
  }
};

const myArr1 = [82, 43, 17, 0, -81];
const myArr2 = [1, 0, -1, -2, -10];

console.log(commonElement(myArr1, myArr2));
