import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
@Injectable()
export class CanActivateGaurd implements CanActivate {
    canActivate(): boolean {
        // if()
        return true;
    }
}
