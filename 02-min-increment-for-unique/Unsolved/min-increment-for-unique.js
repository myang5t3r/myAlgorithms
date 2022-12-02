// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function (nums) {
  // return val
  const val = 0;
  //  if array length = 0 return 0
  if (nums.length === 0) {
    return val;
  }
  // if array is unique return 0
  nums.forEach((element) => {
    const newArr = nums.filter((index) => index === element);
    if (newArr.length != 1) {
      return;
    }
  });

  //   const newArr = nums.sort((a, b) => a - b);
  //   console.log(newArr);
  return val;
};

const myArr = [2, 8, 5, 6, 4, 1, 100];
minIncrement(myArr);
