import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CustomerEditComponent } from "./customer-edit.component";


@Injectable()
export class CanDeactivateGaurd implements CanDeactivate<CustomerEditComponent>{
    
    canDeactivate(
        component: CustomerEditComponent,
        route:ActivatedRouteSnapshot, 
        state:RouterStateSnapshot):boolean{
        var flag = confirm('Do you want to leave the page without saving changes') 
        console.log(flag);
        return flag;;
    }
}