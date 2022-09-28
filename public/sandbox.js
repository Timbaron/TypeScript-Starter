"use strict";
// const greet = () => {
//     console.log('Hello World');
// }
let greet;
// greet = 'Hello World'; // Error: Cannot assign to 'greet' because it is a constant or a read-only property.
greet = () => {
    console.log('Hello World');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
// returns void when no return statement is present
add(5, 10, '20');
const minus = (a, b) => {
    return a + b;
};
// returns number when return statement is present
let result = minus(10, 7);
// result = 'String'; // Error: Type 'string' is not assignable to type 'number'.
