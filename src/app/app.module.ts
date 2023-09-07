import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { StoreFirstGuard } from './storeFirst.guard';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, 
    StoreModule,
    RouterModule.forRoot([
        {
            path: "store", component: StoreComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "cart", component: CartDetailComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "checkout", component: CheckoutComponent,
            canActivate: [StoreFirstGuard]
        },
        {
            path: "admin",
            loadChildren: () => import("./admin/admin.module")
                .then(m => m.AdminModule),
            canActivate: [StoreFirstGuard]
        },
        { path: "**", redirectTo: "/store" }
    ])],

//The RouterModule.forRoot method is passed a set of routes, each of which maps a URL to a
//component. The final route is a wildcard that redirects any other URL to /store, which will display StoreComponent.
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
