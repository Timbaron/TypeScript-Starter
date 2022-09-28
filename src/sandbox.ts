// const greet = () => {
//     console.log('Hello World');
// }

let greet: Function;

// greet = 'Hello World'; // Error: Cannot assign to 'greet' because it is a constant or a read-only property.

greet = () => {
    console.log('Hello World');
}

const add = (a:number, b:number, c:number|string = 10):void => {
    console.log(a+b)
    console.log(c)
} 
// returns void when no return statement is present

add(5, 10,'20');

const minus = (a:number, b:number):number => {
    return a+b;
}
// returns number when return statement is present

let result = minus(10, 7);

// result = 'String'; // Error: Type 'string' is not assignable to type 'number'.
