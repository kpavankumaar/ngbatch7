import { BasicUnitModule } from "./basicunit";
class Samsung extends BasicUnitModule.BasicUnit{
    processor1;
    // mboard:string;
    constructor(){
        super('abcd','def')
    }
}
var A9 = new Samsung();