// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  // use loop to find the factorial of the argument
  // example the factorial of 3  = 1*2*3 = 6
  let result = 1;
  for (let i = 1; i <= num; i++) {
    console.log(i);
    result = i * result;
  }
  return result;
};

console.log(factorial(4));
