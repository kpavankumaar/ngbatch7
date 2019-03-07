import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CanActivateGaurd } from "./CanActivateGaurd";

const routes: Routes = [
  {
    path:'',
    component:CustomerComponent,
    children:[
      {path:'details',component:CustomerDetailsComponent},
      {path:'orders',component:CustomerOrdersComponent},
      {path:'edit',
        component:CustomerEditComponent,
        canActivate:[CanActivateGaurd]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
  static component = [CustomerComponent,CustomerDetailsComponent,CustomerOrdersComponent,CustomerEditComponent];
 }
