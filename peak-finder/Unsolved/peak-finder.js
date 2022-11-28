const peakFinder = function (nums) {
  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak

  console.log(nums);
  return Math.max(...nums);
};

const myArr = [1, 2, 3, 4, 3, 2, 1];
peakFinder(myArr);
