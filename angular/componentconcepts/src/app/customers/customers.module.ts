import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomersComponent } from "./customers.component";
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';
import { RoutingModule } from "./routing.module";

@NgModule({
    imports:[CommonModule,RoutingModule],
    declarations:[
        CustomersComponent, 
        CustomersCardComponent, 
        CustomersGridComponent],
    
        
})
export class CustomersModule{
    constructor(){
        console.log('customers module construtor')
    }
}