import type {Product} from "./Product";
import type {Customer} from "./Customer";

export class Order {
    orderId: number = 0;
    customer: Customer;
    productList: Product[] = [];
    orderDate: Date;

    constructor(customer: Customer) {
        this.orderId++;
        this.customer = customer;
        this.orderDate = new Date();
    }

    displayOrder(): string {
        return `Customer: ${this.customer.name}, Products: ${this.productList.map((p: Product): string => p.name)}, Order date: ${this.orderDate}, Weight: ${this.calculateWeight()}Kg, Total: ${this.calculateTotal()}€`
    }

    addProduct(...product: Product[]){
        this.productList.push(...product);
    }

    removeProduct(productId: number) {
        this.productList = this.productList.filter(p => p.productId !== productId);
    }

    calculateWeight(): number {
        const productsWeight: number[] = this.productList.map((p: Product): number => p.weight);
        return productsWeight.reduce((acc: number, weight: number): number => {
            return acc + weight;
        }, 0);
    }

    calculateTotal(): number {
        const productsPrices: number[] = this.productList.map((p: Product): number => p.price);
        return productsPrices.reduce((acc: number, price: number): number => {
            return acc + price;
        }, 0);
    }

}