// Interface

// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a:string): void
//     spend(a:number) :number;
// }

// const me: IsPerson = {
//     name: 'Timothy',
//     age: 30,
//     speak(text:string): void {
//         console.log(text);
//     },
//     spend(amount:number): number {
//         console.log('I spent', amount);
//         return amount;
//     },
    //skills: [] // error because skills is not defined in the interface
// } 

// const greetPerson = (person: IsPerson)=> {
//     console.log('Hello', person.name);
// }

// greetPerson(name: 'Timothy'); // error because name is not defined in the interface
// greetPerson(me); // works

// let someone: IsPerson; 
// console.log(me)
import {Invoice} from './classess/invoice.js'
import {Payment} from './classess/Payment.js'
import {HasFormatter} from './Interfaces/HasFormatter.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Samuel', 'Blood Donation', 700)
// docTwo = new Payment('Deji', 'Service', 900);

// let docs: HasFormatter[] = [];

// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs)

const InvOne = new Invoice('Timothy', 'work on the EBS website', 250);
const InvTwo = new Invoice('Bishop', 'work on the Jollof website', 650);

// console.log(InvOne, InvTwo);
let invoice: Invoice[] = []; // array of invoices, Only invoices can be added to this array
// invoice.push('hello'); // error because 'hello' is not an instance of invoice object
invoice.push(InvOne);
invoice.push(InvTwo);

invoice.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})
//InvOne.client = 'Jesus'; // Error because client is readonly
InvTwo.amount = 900;

console.log(InvOne, InvTwo);
console.log(invoice);
// const form = document.querySelector('form');

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc)
})