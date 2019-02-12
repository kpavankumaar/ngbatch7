import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomersComponent } from "./customers.component";
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';

@NgModule({
    imports:[CommonModule],
    declarations:[
        CustomersComponent, 
        CustomersCardComponent, 
        CustomersGridComponent],
    
})
export class CustomersModule{

}