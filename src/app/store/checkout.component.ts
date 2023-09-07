import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Order } from "../model/order.model";
import { OrderRepository } from "../model/order.repository";
@Component({
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})

export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: OrderRepository,
                public order: Order){}

//The submitOrder method will be invoked when the user submits a form, which is represented by
//an NgForm object. If the data that the form contains is valid, then the Order object will be passed to the
//repository’s saveOrder method, and the data in the cart and the order will be reset.
    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
 }
 //The next step is to gather the details from the user required to complete the order. Angular includes built-in
//directives for working with HTML forms and validating their contents. Listing 8-24 prepares the checkout
//component, switching to an external template, receiving the Order object as a constructor parameter, and
//providing some additional support to help the template