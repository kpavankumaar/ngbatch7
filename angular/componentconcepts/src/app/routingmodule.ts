import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const route:Routes = [
    {path:'customers',component:CustomersComponent},
    {path:'orders',component:OrdersComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class RoutingModule{
    static component = [AppComponent,CustomersComponent,OrdersComponent]
}