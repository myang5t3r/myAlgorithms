// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  const myArr = str.split(" ");
  const finalArr = [];
  myArr.slice(1).forEach((element) => {
    let cap = element.charAt(0).toUpperCase() + element.slice(1);
    finalArr.push(cap);
  });
  finalArr.unshift(myArr[0].charAt(0).toLowerCase() + myArr[0].slice(1));
  return finalArr.join("");
};

const myStr = "matt loves problem solving";

camelCase(myStr);
