var BasicUnit = /** @class */ (function () {
    function BasicUnit(processor1, mboard) {
        this.processor1 = processor1;
        this.mboard = mboard;
        this.motherBoard = 'xyz';
        // this.processor = processor1;
        // this.motherBoard = mboard;
    }
    // processor:string;
    BasicUnit.run_1 = function () {
    };
    BasicUnit.prototype.run_2 = function () {
    };
    return BasicUnit;
}());
console.log(BasicUnit.run_1());
var test_1 = new BasicUnit('abc', 'mboard1');
test_1.run_2();
console.log(test_1.processor1);
// console.log(test_1.processor1);
