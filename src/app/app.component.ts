import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template:"<router-outlet></router-outlet>"
})
export class AppComponent {
  
}
//When the routing feature is used, Angular looks for the router-outlet element, which defines the
//location in which the component that corresponds to the current URL should be displayed.