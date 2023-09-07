import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent {

//When Angular needs to create an instance of this component, it will have to provide a Cart object as a
//constructor argument, using the service by adding the Cart class to the feature module’s providers property. 
//The default behavior for services means that a single Cart object will be created and shared throughout the application

    constructor(public cart: Cart) { }
}