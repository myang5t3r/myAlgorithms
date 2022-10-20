// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  //   Split string into array
  // create object of each letter of the split string
  //   count the letters
  const myObject = {};
  splitArray = str.split("");
  for (const element of splitArray) {
    // count number of time element is in the string
    let count = str.split(element).length - 1;
    myObject[element] = count;
  }
  return myObject;
};

const myString = "Matt loves to code";

console.log(characterCount(myString));
