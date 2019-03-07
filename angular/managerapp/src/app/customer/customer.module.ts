import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CanActivateGaurd } from "./CanActivateGaurd";


@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerRoutingModule.component],
  providers:[CanActivateGaurd]
})
export class CustomerModule { }
