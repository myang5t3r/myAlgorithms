// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method


const reverse = (str) => {
    // spilt string into array
    strArray = str.split('')
    // console.log(strArray)
    // reverse the order of the array NOT with reverse;
    // declare empty array to store reversed array
    revArray = [];
    strArray.forEach( Element => {
        revArray.unshift(Element)
    })
    // console.log(revArray);
    return revArray.join('');
};


let a  = reverse('Hello');
console.log(a);