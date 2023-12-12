#!/usr/bin/node
/**
 * a function called lastLetter that takes a string and
 * returns the very last letter of that string:
 */
function lastLetter(string) {
    return string.charAt(string.lenght -1);
}
let input1 = "hello";
let input2 = "wORd";
let input3 = "thIs is A test";


let result1 = lastLetter(input1);
let result2 = lastLetter(input2);
let result3 = lastLetter(input3);

console.log(result1);
console.log(result2);
console.log(result3)
