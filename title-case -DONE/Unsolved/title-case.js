// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  const result = [];
  myArr = str.split(" ");
  for (const element of myArr) {
    result.push(element.charAt(0).toUpperCase() + element.slice(1));
  }
  return result.join(" ");
};

const mystr = "matt loves to code";

console.log(titleCase(mystr));
