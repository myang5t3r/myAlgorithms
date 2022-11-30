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
  }
  return returnVar;
}

const myArr = [1, 2, 3, 4, 4, 4, 4];
const myArr2 = [3, 5, 5, 5, 5, 6, 6, 6];
console.log(sameElement(myArr2));
