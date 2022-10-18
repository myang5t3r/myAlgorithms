var removeElement = function (nums, val) {
  //nums = array example : [3,2,2,3]
  //val = int example 3
  for (let i = 0; i <= nums.length; i++) {
    console.log(`This is index ${i}`);
    console.log(nums[i]);
    if (nums[i] === val) {
      nums.splice(i, 1, "_");
    }
    console.log(nums);
  }
  nums = nums.sort();
  let count = 0;
  nums.forEach((element) => {
    if (Number.isInteger(element)) {
      count++;
    }
  });
  //   console.log(count);

  return count;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2]; //[3, 2, 2, 3];
const val = 2; //3;

console.log(removeElement(nums, val));
