// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function (nums) {
  // return val
  let val = 0;
  //   //  if array length = 0 return 0
  //   if (nums.length === 0) {
  //     return val;
  //   }
  //   // if array is unique return 0
  //   nums.forEach((element) => {
  //     const newArr = nums.filter((index) => index === element);
  //     if (newArr.length != 1) {
  //       return;
  //     }
  //   });
  const newArr = nums.sort((a, b) => a - b);
  console.log(newArr);
  for (let i = 1; i < newArr.length; i++) {
    console.log(newArr[i]);
    if (newArr[i] <= newArr[i - 1]) {
      const temp = newArr[i];
      console.log(temp);
      newArr[i] = newArr[i - 1] + 1;
      console.log(newArr[i]);
      val += newArr[i] - temp;
      console.log(val);
    }
  }
  console.log(val);
  return val;
};

const myArr = [0, 0, 1, 2, 2, 3, 0];
minIncrement(myArr);
