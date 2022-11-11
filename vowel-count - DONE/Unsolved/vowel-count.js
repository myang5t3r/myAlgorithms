// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  //   Make str into all lowercase
  str = str.toLowerCase();
  console.log(str);
  // make string into array
  let myArr = str.split("");
  //   make counter
  let count = 0;
  for (const index of myArr) {
    switch (index) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
    }
  }
  //   console.log(myArr);
  return count;
};

const myStr = "I think, therefore I am";

console.log(vowelCount(myStr));
