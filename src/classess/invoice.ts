export class Invoice {
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