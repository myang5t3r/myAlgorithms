function miniMaxSum(arr) {
  // Write your code here
  // Need condition if all elements are the same
  if (arr.every((val, i, ar) => val === ar[0])) {
    // remove first element
    arr.shift();
    // add all elements and console log
    console.log(
      `${arr.reduce((a, b) => a + b, 0)} ${arr.reduce((a, b) => a + b, 0)}`
    );
  } else {
    // find min and max of array
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const maxArr = arr.filter((value, index, arr) => {
      return value > min;
    });
    const minArr = arr.filter((value, index, arr) => {
      return value < max;
    });
    console.log(
      `${minArr.reduce((a, b) => a + b, 0)} ${maxArr.reduce(
        (a, b) => a + b,
        0
      )}`
    );
  }
}

const myArr = [5, 5, 5, 5, 5];

miniMaxSum(myArr);
