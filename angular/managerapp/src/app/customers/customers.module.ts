import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersRoutingModule.component]
})
export class CustomersModule { 
  constructor(){
    console.log('customer module contructor');
  }
}

