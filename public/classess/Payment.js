export class Payment {
    // readonly client: string; // Only Readable not Changable inside and outside of the class
    // private details: string; // Private: Can only be accessed inside of the class
    // public amount: number; // Public(Default):Can be accessed anywhere
    // constructor(c:string, d:string, a:number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(recipient, // Public
    details, // Private
    amount // Public
    ) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
