import { Product } from "./Product";
import { ShoeSize } from "../enum/ShoeSize"
import {ClothingSize} from "../enum/ClothingSize.js";

export class Shoe extends Product {
    size: ShoeSize;

    constructor(name: string, weight: number, price: number, size: ShoeSize) {
        super(name, weight, price);
        this.size = size;
    }

    displayDetails(): string {
        return `Product ID: ${this.productId}, Name: ${this.name}, Weight: ${this.weight}, Price: ${this.price}€, Size: ${this.size}`
    }
}