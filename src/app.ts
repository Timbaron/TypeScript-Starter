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
 
    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
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

console.log(docThree, docFour);

