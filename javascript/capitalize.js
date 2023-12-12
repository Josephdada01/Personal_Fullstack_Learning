#!/usr/bin/node
/**
 * a function called capitalize that takes a string and returns that
 * string with only the first letter capitalized.
 * Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
 */
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
let input1 = "hello";
let input2 = "wORd";
let input3 = "thIs is A test";


let result1 = capitalize(input1);
let result2 = capitalize(input2);
let result3 = capitalize(input3);

console.log(result1);
console.log(result2);
console.log(result3)
