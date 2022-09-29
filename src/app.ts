// Classes
class Invoice {
    // readonly client: string; // Only Readable not Changable inside and outside of the class
    // private details: string; // Private: Can only be accessed inside of the class
    // public amount: number; // Public(Default):Can be accessed anywhere

    // constructor(c:string, d:string, a:number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(
        readonly client: string, // Public
        private details: string, // Private
        public amount: number // Public
    ){}

    format(){
        return `${this.client} owns $${this.amount} for ${this.details}`;
    }
}

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
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})