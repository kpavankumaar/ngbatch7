class BasicUnit{
    motherBoard:string = 'xyz';
    processor:string;
    static run_1(){

    }
    run_2(){

    }
    constructor(processor){
        this.processor = processor;
    }
}
console.log(BasicUnit.run_1())
let test_1 = new BasicUnit('abc');
test_1.run_2();
console.log(test_1.processor);