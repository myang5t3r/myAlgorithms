// Input is an array of integers
// if the element is shown >= half the length of the array return element
// else return -1

function sameElement(arr) {
  //   find half the length of array
  const half = Math.floor(arr.length / 2);
  //   console.log(half);\
  //   return variable
  let returnVar = -1;
  //   loop through array
  for (let i = 0; i <= arr.length - 1; i++) {
    let count = 0;
    // remove first element
    const firstElement = arr.shift();
    arr.forEach((element) => {
      if (element === firstElement) {
        count++;
        // console.log(count);
      }
      if (count >= half) {
        // console.log("got here");
        returnVar = element;
      }
    });
    arr.push(firstElement);
  }
  return returnVar;
}

function solution2(arr) {
  // create return variable
  let returnVal = -1;
  // find half of length of array
  const half = Math.floor(arr.length / 2);
  // console.log(half);
  // Loop through each element of array and use array method filter
  arr.forEach((element) => {
    const newArr = arr.filter((index) => index === element);
    // console.log(newArr);
    if (newArr.length >= half) {
      returnVal = element;
    }
  });
  return returnVal;
}

const myArr = [1, 2, 3, 4, 4, 4, 4];
const myArr2 = [3, 5, 5, 5, 5, 6, 6, 6];
const myArr3 = [5, 6, 10, 4, 66, 11];

console.log(sameElement(myArr3));
console.log(solution2(myArr2));
