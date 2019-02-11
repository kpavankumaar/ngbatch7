import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './routingmodule';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    // RoutingModule, //routing module
    OrdersModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app module constructor');
  }
 }
