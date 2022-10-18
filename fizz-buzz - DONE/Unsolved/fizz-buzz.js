// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
  //   use a switch statement due to amount of condition

  arr.forEach((element) => {
    // console.log(element);
    switch (true) {
      //   if element in array = anything less then 3 or number 4 return element
      case element === 0:
        console.log(element);
        break;
      case element === 1:
        console.log(element);
        break;
      case element === 2:
        console.log(element);
        break;
      case element === 4:
        console.log(element);
        break;
      //   If divisible by 3 and 5
      case element % 3 === 0 && element % 5 === 0:
        console.log("Fizz Buzz");
        break;
      // print number if not divisible by 3 or 5
      case element % 3 !== 0 && element % 5 !== 0:
        console.log(element);
        break;
      //   case if element is divisible by 3 print Fizz
      case element % 3 === 0:
        console.log("Fizz");
        break;
      case element % 5 === 0:
        console.log("Buzz");
        break;
    }
  });
};

myArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

fizzBuzz(myArray);
