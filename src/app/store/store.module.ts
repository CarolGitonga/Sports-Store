import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations:  [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ModelModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    StoreComponent,
    CartDetailComponent
  ]
})
export class StoreModule { }

//The decorator uses the declarations property to tell Angular about the StoreComponent class, and the exports property
//tells Angular the class can be also used in other parts of the application, which is important because it will be used by the root module