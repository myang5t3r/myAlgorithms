function timeConversion(s) {
  // Write your code here
  if (s.includes("PM")) {
    if (s.includes("12")) {
      return s.slice(0, 8);
    }
    // remove PM with slice
    s = s.slice(0, 8);
    // deconstruct string
    s = s.split(":");
    // add 12 to first index
    s[0] = Number(s[0]) + 12;
    // make arry into string
    s = s.join("");
    console.log(s);
    // add : back into sring
    s = s.slice(0, 2) + ":" + s.slice(2, 4) + ":" + s.slice(4);
    return s;
  } else if (s.includes("12", 0)) {
    console.log("got here");
    // remove AM with slice
    s = s.slice(0, 8);
    // deconstruct string
    s = s.split(":");
    console.log(s);
    // subtract 12 to first index
    console.log(Number(s[0]));
    s[0] = Number(s[0]) - 12;
    console.log(s[0]);
    console.log(s);
    // make arry into string
    s = s.join("");
    console.log(s);
    // add : back into sring
    s = "0" + s.slice(0, 1) + ":" + s.slice(1, 3) + ":" + s.slice(3);
    return s;
  } else {
    // console.log(s.slice(0, 8));
    return s.slice(0, 8);
  }
}

const myStr = "12:40:22PM";
console.log(timeConversion(myStr));
