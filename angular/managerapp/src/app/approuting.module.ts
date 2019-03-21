import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const route:Routes =[
    {path:'customers/:id',loadChildren:"./customer/customer.module#CustomerModule"},
    {path:'customers',loadChildren:"./customers/customers.module#CustomersModule"},
    {path:'orders',loadChildren:"./orders/orders.module#OrdersModule"},
    {path:'',redirectTo:'customers',pathMatch:'full'}
];

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}