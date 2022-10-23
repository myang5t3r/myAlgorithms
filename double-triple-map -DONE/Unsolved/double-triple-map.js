// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

var doubleTripleMap = function (arr) {
  const resultArr = [];
  for (const element of arr) {
    if (element % 2 === 0) {
      resultArr.push(element * 2);
    } else if (element % 2 !== 0) {
      resultArr.push(element * 3);
    }
  }
  return resultArr;
};

const myArr = [1, 2, 3, 4];

doubleTripleMap(myArr);
