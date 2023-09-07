import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model"; //Registering the Cart as a Service in the providers property
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { ConnectionService } from "./connection.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
     RestDataSource, AuthService, ConnectionService]
})
export class ModelModule { }
//The @NgModule decorator is used to create feature modules, and its properties tell Angular how the
//module should be used. There is only one property in this module, providers, and it tells Angular which
//classes should be used as services for the dependency injection feature