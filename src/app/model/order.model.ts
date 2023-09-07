import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order {
    public id: number | null = null;
    public name: string | null = null;
    public address: string | null = null;;
    public city: string | null = null;;
    public state: string | null = null;;
    public zip: string | null = null;;
    public country: string | null = null;;
    public shipped: boolean = false;

    constructor(public cart: Cart) { }

    clear() {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }
}
//The Order class will be another service, which means there will be one instance shared throughout
//the application. When Angular creates the Order object, it will detect the Cart constructor parameter and
//provide the same Cart object that is used elsewhere in the application.