import { Injectable } from "@angular/core";
import { Product } from "./product.model";

//Strictly speaking, the @Injectable decorator is required only when a class has its own constructor arguments to resolve, 
//but it is a good idea to apply it anyway because it serves as a signal that the class is intended for use as a service.
@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    addLine(product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity += quantity;    
        } else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    updateQuantity(product: Product, quantity: number) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }

    removeLine(id?: number) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {
          if (l.product && l.product.price !== undefined) { // Add null check and undefined check for l.product.price
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.product.price);
          }
        });
      }
      
      
}
//This model class is used to gather together the products that the user has selected.
//The Cart class keeps track of the total number of items that have been selected and their total cost.



export class CartLine {
    constructor(public product: Product, public quantity: number) {}

    get lineTotal() {
        if (this.product.price) {
            return this.quantity * this.product.price;
        }
        return 0;
    }
}
//Individual product selections are represented as an array of CartLine objects, each of which contains a Product object and a quantity
