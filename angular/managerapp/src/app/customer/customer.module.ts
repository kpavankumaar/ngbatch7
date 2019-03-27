import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CanActivateGaurd } from "./CanActivateGaurd";
import { FormsModule } from '@angular/forms';
import { CanDeactivateGaurd } from './CanDeactivateGaurd';


@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  declarations: [CustomerRoutingModule.component],
  providers:[CanActivateGaurd,CanDeactivateGaurd]
})
export class CustomerModule { }
