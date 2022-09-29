import {Invoice} from './classess/invoice.js'
import { ListTemplate } from './classess/ListTemplate.js';
import {Payment} from './classess/Payment.js'
import {HasFormatter} from './Interfaces/HasFormatter.js'


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

const InvOne = new Invoice('Timothy', 'work on the EBS website', 250);
const InvTwo = new Invoice('Bishop', 'work on the Jollof website', 650);

// console.log(InvOne, InvTwo);
let invoice: Invoice[] = []; // array of invoices, Only invoices can be added to this array
// invoice.push('hello'); // error because 'hello' is not an instance of invoice object
invoice.push(InvOne);
invoice.push(InvTwo);

// invoice.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
// InvTwo.amount = 900;

// console.log(InvOne, InvTwo);
// console.log(invoice);
// const form = document.querySelector('form');

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber];
 
    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values)
    }
    list.render(doc, type.value, 'end');
})

// GENERICS

// Generics are a way to create reusable blocks of code that can be used with different types
const addUID = <T extends object>(obj:T) => { // OR const addUID = <T extends {name:string}>(obj:T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'Timothy', age: 25});

console.log(docOne.name);

// ENUMS

enum ResourceType {BOOK,AUTHOR, FILM, DIRECTOR, PERSON}

// with interface
interface Resource<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: {name: 'Timothy'}
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.PERSON,
    data: ['bread', 'milk', 'toilet roll']
}

// console.log(docThree, docFour);

// TUPLES

let arr = ['Timothy', 25, true];

// let tup: [string,number,boolean] = [50, '25', true]; // Error because the order of the elements in the array is not the same as the order of the elements in the tuple
let tup: [string,number,boolean] = ['Timothy', 25, true];
//tup[0] = false; // Error because the order of the elements in the array is not the same as the order of the elements in the tuple
tup[0] = 'Bishop';
// tup[1] = 'Timothy'; // Error because the order of the elements in the array is not the same as the order of the elements in the tuple
tup[1] = 50;
// tup[2] = 25; // Error because the order of the elements in the array is not the same as the order of the elements in the tuple
tup[2] = false;

let student:[string, number];

student = ['Timothy', 25];

//student = [34,'Samuel'] // Error because the order of the elements in the array is not the same as the order of the elements in the tuple
