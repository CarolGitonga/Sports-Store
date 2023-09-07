import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs"; //Handling Orders
import { Order } from "./order.model";

//The StaticDataSource class defines a method called getProducts, which returns the dummy data.
//The result of calling the getProducts method is an Observable<Product[]>, which is an Observable that produces arrays of Product objects.

@Injectable()//This decorator tells Angular,this class will be used as a service,which allows other classes to access its functionality through dependency injection.
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
        new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
        new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
        new Product(5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
        new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
        new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
        new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
        new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
        new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
        new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
        new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
        new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
        new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
        new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order>{
        console.log(JSON.stringify(order));
        return from([order])

    }
}
//To prepare for the transition from dummy to real data, I am going to feed the application data using a data source.
//The rest of the application won’t know where the data is coming from, which will make the switch to getting data using HTTP requests seamless.