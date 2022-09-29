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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
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
console.log(docThree, docFour);
