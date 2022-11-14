// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  const str = arr.join("");
  console.log(str);
  for (const element of arr) {
    console.log(element);
    let count = str.split(element).length - 1;
    console.log(count);
    if (count > 1) {
      return false;
    }
  }
  return true;
};

const myArr = [1, 2, 4, 5, 3];

console.log(isUnique(myArr));
