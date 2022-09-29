export class Invoice {
    // readonly client: string; // Only Readable not Changable inside and outside of the class
    // private details: string; // Private: Can only be accessed inside of the class
    // public amount: number; // Public(Default):Can be accessed anywhere
    // constructor(c:string, d:string, a:number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(client, // Public
    details, // Private
    amount // Public
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owns $${this.amount} for ${this.details}`;
    }
}
