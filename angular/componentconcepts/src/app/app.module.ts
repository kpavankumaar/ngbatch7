import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';
import { route } from './route';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app module constructor');
  }
 }
