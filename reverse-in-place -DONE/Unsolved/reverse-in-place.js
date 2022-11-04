// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
  let i = 0;
  console.log(arr);
  while (i < Math.floor(arr.length / 2)) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    i++;
  }

  console.log(arr);
  //   console.log(Math.floor(arr.length / 2));
  return arr;
};

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

reverseInPlace(myArr);
