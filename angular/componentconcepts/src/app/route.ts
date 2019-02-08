import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';

export const route:Routes = [
    {path:'customers',component:CustomersComponent},
    {path:'orders',component:OrdersComponent}
]