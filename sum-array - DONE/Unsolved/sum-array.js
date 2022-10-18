// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  // loop through array and sum each index
  let result = 0;
  arr.forEach((element) => {
    result = result + element;
  });
  return result;
};

myArray = [1, 2, 3, 4, 5];
console.log(sumArray(myArray));
