import { Injectable } from "@angular/core";
import { CanActivate,Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "../core/services/auth.service";
import { routerNgProbeToken } from "@angular/router/src/router_module";
@Injectable()
export class CanActivateGaurd implements CanActivate {
    constructor(public authService:AuthService, public router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {
        if(this.authService.loggedIn){
            return true;
        }else{
            console.log(state.url);
            this.authService.redirectUrl = state.url;
            this.router.navigate(['login']);
            return false;
        }
        
    }
}
