import { Order } from './model/Order';
import { Product } from './model/Product'
import {Customer} from "./model/Customer";
import { Clothing } from './model/Clothing';
import { Shoe } from './model/Shoe';
import {ShoeSize} from "./enum/ShoeSize";
import { ClothingSize } from "./enum/ClothingSize";


const michel = new Customer("Michel",' michel@michel.com');
const bobby = new Customer("Bobby",' bobby@bobby.com');
// Clothing instances
const shirt = new Clothing( "T-Shirt Coton Bio",  0.3,  29.99, ClothingSize.M);
const jacket = new Clothing( "Veste en Jean",       0.8,  89.99, ClothingSize.L);
const hoodie = new Clothing("Sweat à Capuche",     0.5,  49.99, ClothingSize.XL);
const dress  = new Clothing("Robe d'Été Fleurie",  0.25, 59.99, ClothingSize.S);
const pants  = new Clothing("Pantalon Chino",      0.45, 44.99, ClothingSize.L);

// Shoes instances
const sneakers = new Shoe( "Sneakers Classic White", 0.7, 79.99,  ShoeSize.s42);
const boots    = new Shoe( "Boots en Cuir Marron",   1.1, 129.99, ShoeSize.s43);
const sandals  = new Shoe( "Sandales Confort",        0.4, 39.99,  ShoeSize.s40);
const runners  = new Shoe( "Running Pro Légères",     0.6, 99.99,  ShoeSize.s41);
const loafers  = new Shoe( "Mocassins Élégants",      0.5, 89.99,  ShoeSize.s44);


const michelProducts: Product[] = [];
const bobbyProducts: Product[] = [];
const orderMichel = new Order(michel, michelProducts);
const orderBobby = new Order(bobby, bobbyProducts);
console.log(michel.displayInfo());
console.log(bobby.displayInfo());


orderMichel.addProduct(jacket, shirt, hoodie, sneakers, runners);
orderBobby.addProduct(dress, pants, boots, loafers, sandals)
console.log(orderMichel.displayOrder());
orderMichel.removeProduct(2);
orderBobby.removeProduct(4)
console.log(orderMichel.displayOrder());