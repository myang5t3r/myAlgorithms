function findMedian(arr) {
  // Write your code here
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let index = Math.floor(arr.length / 2);
  return arr[index];
}

const myArr = [0, 2, 3, 4, 1, 11, 5];

findMedian(myArr);
