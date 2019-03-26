import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class CanDeactivateGaurd implements CanDeactivate{
    
    canDeactivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        var flag = confirm('Do you want to leave the page without saving changes') 

        return flag;;
    }
}