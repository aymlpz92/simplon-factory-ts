let count = 1;

export class Customer {
    customerId : number;
    name: string;
    email: string;

    constructor(name: string, email: string ) {
        this.customerId = count++;
        this.name = name;
        this.email = email;
    }

    displayInfo(): string {
        return `Customer ID: ${this.customerId}, Name: ${this.name}, Email: ${this.email}`
    }
}
