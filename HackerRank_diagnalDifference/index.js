function diagonalDifference(arr) {
  // Write your code here
  // In JS square matrix looks like this
  // const arr = [[1,2,3],[4,5,6],[7,8,9]]
  // need to loop through each element of arr
  // Need to do this for each diagonal
  // Need the length size of the matrix
  const size = arr[0].length;
  // find left diaginal
  // create empty arrray to store each value
  const leftDiaginal = [];
  for (let i = 0; i < size; i++) {
    leftDiaginal.push(arr[i][i]);
  }
  console.log(leftDiaginal);
  // add elements from leftDiaginal with reduce
  const leftTotal = leftDiaginal.reduce((a, b) => a + b);
  console.log(leftTotal);

  // find Right diaginal
  // create empty arrray to store each value
  const rightDiaginal = [];
  for (let i = 0; i < size; i++) {
    rightDiaginal.push(arr[i][size - 1 - i]);
  }
  console.log(rightDiaginal);
  //add elements from rightDiaginal with reduce
  const rightTotal = rightDiaginal.reduce((a, b) => a + b);
  console.log(rightTotal);

  // return absolute diagonal difference
  const diff = Math.abs(leftTotal - rightTotal);
  //   console.log(diff);
  return diff;
}

const myMatrix = [
  [1, 2, 44],
  [2, 3, 4],
  [5, 6, 67],
];

console.log(diagonalDifference(myMatrix));
