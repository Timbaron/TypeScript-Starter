"use strict";
// let greet:Function;
// Example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// Example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Example 3
let logDetails;
logDetails = (akiode) => {
    console.log(`${akiode.name} is ${akiode.age} years old`);
};
