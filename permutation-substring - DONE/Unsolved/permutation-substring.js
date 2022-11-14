// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function (str, sub) {
  // make str into an array
  const strArray = sub.split("");
  console.log(strArray);
  // Loop through strArray and check if each letter is in "sub"
  for (const element of strArray) {
    let check = str.split(element).length - 1;
    console.log(check);
    if (check === 0) {
      return false;
    }
  }
  return true;
};

const myStr = "nnhsuieaero";
const mySub = "summer";

console.log(permutationSubstring(myStr, mySub));
