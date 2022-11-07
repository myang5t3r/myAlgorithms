/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) return;

  let leftSwapIndex;
  // loop through array from right to left and find first decreasing number
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      console.log(nums[i], `<`, nums[i + 1]);
      leftSwapIndex = i;
      break;
    }
  }

  // Loop through array from right to left and find first number that is > nums[leftSwapIndex]
  for (let i = nums.length - 1; i > leftSwapIndex; i--) {
    if (nums[i] > nums[leftSwapIndex]) {
      console.log(nums[i], `>`, nums[leftSwapIndex]);
      // swap the two numbers of array
      [nums[i], nums[leftSwapIndex]] = [nums[leftSwapIndex], nums[i]];

      // reorder array after swap
      let chopped = nums.splice(leftSwapIndex + 1);
      chopped.sort((a, b) => a - b);
      console.log(chopped);
      nums.push(...chopped);
      console.log(nums);
      return nums;
    }
  }

  // if right hand swap not found return lowest permutation
  return nums.sort((a, b) => a - b);
};

myArr = [3, 2, 1];

console.log(nextPermutation(myArr));
