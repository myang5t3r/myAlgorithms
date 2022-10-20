// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
  for (const [index, value] of arr.entries()) {
    if (value === target) {
      //   console.log(index);
      return index;
    }
  }
  return -1;
};

// const myArray = [1, 2, 3, 4, 5, 6, 9, 33];

// const test = linearSearch(myArray, 88);
// console.log(test);
