import { HasFormatter } from '../Interfaces/HasFormatter.js';
export class Payment implements HasFormatter {  
    // readonly client: string; // Only Readable not Changable inside and outside of the class
    // private details: string; // Private: Can only be accessed inside of the class
    // public amount: number; // Public(Default):Can be accessed anywhere

    // constructor(c:string, d:string, a:number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(
        readonly recipient: string, // Public
        private details: string, // Private
        public amount: number // Public
    ){}

    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}