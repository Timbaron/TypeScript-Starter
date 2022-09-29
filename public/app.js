import { Invoice } from './classess/invoice.js';
import { ListTemplate } from './classess/ListTemplate.js';
import { Payment } from './classess/Payment.js';
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const InvOne = new Invoice('Timothy', 'work on the EBS website', 250);
const InvTwo = new Invoice('Bishop', 'work on the Jollof website', 650);
// console.log(InvOne, InvTwo);
let invoice = []; // array of invoices, Only invoices can be added to this array
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
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
// Generics are a way to create reusable blocks of code that can be used with different types
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Timothy', age: 25 });
console.log(docOne.name);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: 'Timothy' }
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.PERSON,
    data: ['bread', 'milk', 'toilet roll']
};
// console.log(docThree, docFour);
// TUPLES
let arr = ['Timothy', 25, true];
// let tup: [string,number,boolean] = [50, '25', true]; // Error because the order of the elements in the array is not the same as the order of the elements in the tuple
let tup = ['Timothy', 25, true];
//tup[0] = false; // Error because the order of the elements in the array is not the same as the order of the elements in the tuple
tup[0] = 'Bishop';
// tup[1] = 'Timothy'; // Error because the order of the elements in the array is not the same as the order of the elements in the tuple
tup[1] = 50;
// tup[2] = 25; // Error because the order of the elements in the array is not the same as the order of the elements in the tuple
tup[2] = false;
let student;
student = ['Timothy', 25];
//student = [34,'Samuel'] // Error because the order of the elements in the array is not the same as the order of the elements in the tuple
