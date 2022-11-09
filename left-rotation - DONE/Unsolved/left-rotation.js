// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
  //   if empty array, do not modify array
  if (arr.length === 0) return;

  // rotate each element to the left
  //   loop the positions
  for (let i = 0; i < positions; i++) {
    console.log(i);
    let firstElement = arr.shift();
    // push element to back of array
    arr.push(firstElement);
    console.log(arr);
  }
};
//   remove first element and push to back of array

const myArr = [];
const myArr1 = [1, 2, 3];

leftRotation(myArr1, 20);
