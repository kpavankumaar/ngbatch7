import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CanActivateGaurd } from "./CanActivateGaurd";
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  declarations: [CustomerRoutingModule.component],
  providers:[CanActivateGaurd]
})
export class CustomerModule { }
