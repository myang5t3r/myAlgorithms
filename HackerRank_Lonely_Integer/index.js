function lonelyinteger(a) {
  // Write your code here
  // User filter array method
  let unique = a.filter(function (value) {
    return a.indexOf(value) === a.lastIndexOf(value);
  });
  console.log(unique);
  return unique[0];
}

const myArr = [1, 2, 3, 2, 1];
console.log(lonelyinteger(myArr));
