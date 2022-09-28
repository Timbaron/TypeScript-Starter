let age: any;

age = 25;

// same as let age: any = 25;

age = true;

console.log(age);

age = 'hello';

console.log(age);

age = { name: 'Max' };

console.log(age);

let mixed: any[] = [];

mixed.push(5);

mixed.push('Samuel');

mixed.push(false);

console.log(mixed);

// objects

let Akiode: { name: any; age: any };

Akiode = { name: 'Akiode', age: 25 };

console.log(Akiode);

Akiode = { name: 'Akiode', age: '25' };

console.log(Akiode);