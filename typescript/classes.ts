interface BasicUnitsOfMobileDevice{
    motherBoard:string;
    ram:string;
}
interface BasicUnitWithProcessor extends BasicUnitsOfMobileDevice{
    processor:string;
}
class Lenovo implements BasicUnitWithProcessor{
    motherBoard:string;
    ram:string;
    processor:string;
}
class BasicUnit implements BasicUnitsOfMobileDevice{
    motherBoard:string = 'xyz';
    ram:string;
    // processor:string;
    static run_1(){
        
    }
    run_2(){

    }
    constructor(protected processor1, private mboard){
        // this.processor = processor1;
        // this.motherBoard = mboard;
    }
}
class Samsung extends BasicUnit{
    processor1;
    // mboard:string;
    constructor(){
        super('abcd','def')
    }
}
class Apple extends BasicUnit{
    constructor(){
        super('123','456');
    }
}
console.log(BasicUnit.run_1())
let test_1 = new BasicUnit('abc','mboard1');
let test_2 = new Samsung()
let test_3 = new Apple()
test_1.run_2();
console.log(test_1.processor1);
console.log(test_2.processor1);
// console.log(test_1.processor1);