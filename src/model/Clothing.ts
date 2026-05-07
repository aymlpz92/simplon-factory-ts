import { Product } from "./Product";
import { ClothingSize } from "../enum/ClothingSize"


export class Clothing extends Product {
    size: ClothingSize;

    constructor(name: string, weight: number, price: number, size: ClothingSize) {
        super(name, weight, price);
        this.size = size;
    }

    displayDetails(): string {
        return `Product ID: ${this.productId}, Name: ${this.name}, Weight: ${this.weight}, Price: ${this.price}€, Size: ${this.size}`
    }
}
