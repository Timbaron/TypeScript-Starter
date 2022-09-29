// Interface
const me = {
    name: 'Timothy',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
    //skills: [] // error because skills is not defined in the interface
};
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
// greetPerson(name: 'Timothy'); // error because name is not defined in the interface
greetPerson(me); // works
// let someone: IsPerson; 
console.log(me);
import { Invoice } from './classess/invoice.js';
const InvOne = new Invoice('Timothy', 'work on the EBS website', 250);
const InvTwo = new Invoice('Bishop', 'work on the Jollof website', 650);
// console.log(InvOne, InvTwo);
let invoice = []; // array of invoices, Only invoices can be added to this array
// invoice.push('hello'); // error because 'hello' is not an instance of invoice object
invoice.push(InvOne);
invoice.push(InvTwo);
invoice.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//InvOne.client = 'Jesus'; // Error because client is readonly
InvTwo.amount = 900;
console.log(InvOne, InvTwo);
console.log(invoice);
// const form = document.querySelector('form');
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
