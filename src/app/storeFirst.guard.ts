import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { StoreComponent } from "./store/store.component";

@Injectable()
export class StoreFirstGuard {
    private firstNavigation = true;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != StoreComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}
//There are different ways to guard routes. this is an example of a guard that prevents a route from being activated, 
//which is implemented as a class that defines a canActivate method. The implementation of this method uses the context objects that 
//Angular provides that describe the route that is about to be navigated to and checks to see whether the target component is a StoreComponent.
//If this is the first time that the canActivate method has been called and a different component is about to be used, then the Router.navigateByUrl method
//is used to navigate to the root URL.The @Injectable decorator has been applied in the listing because route guards are services.
//registers the guard as a service using the root module’s providers property and guards each route using the canActivate property.