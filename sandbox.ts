// EXPLICIT TYPES

let character:string;
let age:number;
let isLoggedIn:boolean;

// age = 'Timothy'; // Will fail because age is explicitly typed as a number 
age = 40; // Will pass because age is explicitly typed as a number
// isLoggedIn = 25; // Will fail because isLoggedIn is explicitly typed as a boolean
isLoggedIn = true; // Will pass because isLoggedIn is explicitly typed as a boolean


// ARRAYS
let myArray:string[] = [];

// myArray = [12, 25, 36]; // Will fail because myArray is explicitly typed as a string array
myArray = ['Timothy', 'John', 'Jane'];

// UNION TYPES

let mixed: (string|number)[] = [];

mixed.push('Timothy');
mixed.push(25);
// mixed.push(false); // Will fail because mixed is explicitly typed as a string or number array
console.log(mixed);

let uid: string|number; // Can be a string or a number

uid = '123';
uid = 123;
// uid = false; // Will fail because uid is explicitly typed as a string or number


// OBJECTS

let Akiode: object;

Akiode = {name: 'Timothy', age: 40};

// Akiode = 'Timothy'; // Will fail because Akiode is explicitly typed as an object

let Akiode2: {
    name: string,
    age: number,
    isLoggedIn: boolean
}

//  Akiode2 = [12, 25, 36]; // Will fail because Akiode2 is explicitly typed as an object with name, age, and isLoggedIn properties
Akiode2 = {name: 'Timothy', age: 40, isLoggedIn: true}; // Will pass because Akiode2 is explicitly typed as an object with the properties name, age, and isLoggedIn
