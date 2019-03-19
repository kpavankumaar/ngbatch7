import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrdersComponent, OrderDetailsComponent],
  exports:[OrdersComponent]
})
export class OrdersModule { }
