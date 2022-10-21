// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  const firstMax = Math.max(...arr);
  const newArray = arr.filter((element) => element < firstMax);
  const secondMax = Math.max(...newArray);
  return firstMax * secondMax;
};

const myArray = [2, 3, 6, 20];
productOfLargestTwo(myArray);
