// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  const newStr = str.split("").reverse().join("");
  if (str === newStr) {
    return true;
  }
  return false;
};

const myStr = "radar";

console.log(isPalindrome(myStr));
