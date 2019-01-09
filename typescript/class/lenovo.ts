import { BasicUnitModule } from "./basicunit";
class Lenovo implements BasicUnitModule.BasicUnitWithProcessor{
    motherBoard:string;
    ram:string;
    processor:string;
    private protectiveCover:boolean = false;
    private protectiveCover1:boolean = false;
    public get value() : boolean {
        return this.protectiveCover;
    }
    
    public set value(v : boolean) {
        this.protectiveCover = v;
    }
    
    public get getProtectiveCover1Value() : boolean {
        return this.protectiveCover1;
    }
    
    public set setProtectiveCover1Value(v : boolean) {
        this.protectiveCover1 = v;
    }

}
var lenovoModel1 = new Lenovo();
// console.log(lenovoModel1.protectiveCover);
lenovoModel1.value = true;
lenovoModel1.setProtectiveCover1Value = true;
