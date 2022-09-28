// arrays
var names = ['timothy', 'deboarh', 'lois'];
// names = 'This will fail'; // Type 'string' is not assignable to type 'string[]'.
names.push('james');
// names.push(20); // 'This will fail'
// names[0] = 100; // this will fail
var numbers = [10, 20, 30, 40];
numbers.push(25); // OK
// numbers.push('timothy'); // this will fail
// numbers[1] = 'deborah'; // this will fail
// MIXED ARRAY
var mixed = ['ken', 4, 'chun-li', 8, 9, true];
mixed.push('eunice'); // works
mixed.push(50); // this will work
mixed[0] = 6; // this is allowed
// objects
var akiode = {
    name: 'akiode',
    belt: 'black',
    age: 21
};
akiode.age = 30; // this is fine
// akiode.age = 'thirty'; // will fail
// ninja.age = '30'; // this will fail
// akiode.skills = ['Coding', 'Goalkeeper']; // this will fail because 'Skills' does not exist in the initial object
akiode = {
    name: 'eunice',
    belt: 'orange',
    age: 20 // Will display error is commented out because it does not match the initial object
};
