import { NgModule } from "@angular/core";
import { OrdersComponent } from "./orders.component";
import { CommonModule } from "@angular/common";
import { RoutingModule } from "../customers/routing.module";

@NgModule({
    declarations:[OrdersComponent],
    imports:[CommonModule, RoutingModule],
    // exports:[OrdersComponent]
})
export class OrdersModule {
    
    constructor(){
        console.log('orders module construtor')
    }
}