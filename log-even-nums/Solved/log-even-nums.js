// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
  let count = 0;
  while (count < num) {
    console.log(count);
    count = count + 2;
  }
};

logEvenNums(10);
