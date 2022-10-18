// Write code to merge two sorted arrays into a new sorted array
function combineArr(arr1, arr2) {
  return mergeSorted([...arr1, ...arr2]);
}

var mergeSorted = function (arr) {
  //  Think of divide and conquer
  // Need base case because we will use recursion
  if (arr.length < 2) {
    return arr;
  }
  // Find the mid of the combined array
  const mid = Math.floor(arr.length / 2);
  // Create left and right array
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);
  // Then pass left and right array into a merge function (helper function)
  // Notice that recursion is used here to divide array down to single elements
  return merge(mergeSorted(leftArray), mergeSorted(rightArray));
};

function merge(leftArr, rightArr) {
  //   create temporary array to hold sorted elements
  const sortedArr = [];
  //   Check left/right array is not empty
  while (leftArr.length && rightArr.length) {
    // Compare first element from both arrays and push smaller element into sortedArr
    if (leftArr[0] <= rightArr[0]) {
      // push left array into sorted array if element is smaller and remove element from left array with shift
      sortedArr.push(leftArr.shift());
    } else {
      // if right array is smaller, push element into sortedArr and remove element from rightArr with shift
      sortedArr.push(rightArr.shift());
    }
  }
  //   Merge array with left over elements in arrays
  return [...sortedArr, ...leftArr, ...rightArr];
}

myArray1 = [2, 1, 10, 5];
myArray2 = [6, 8, 7, 9];

let x = combineArr(myArray1, myArray2);
console.log(x);
