import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const route:Routes = [
    {path:'customers',loadChildren:"./customers/customers.module#CustomersModule"},
    {path:'orders',loadChildren:"./orders/orders.module#OrdersModule"}
]

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class RoutingModule{
    static component = [AppComponent,CustomersComponent,OrdersComponent]
}