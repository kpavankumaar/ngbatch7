var sum_1 = (a, b) => {
    console.log(this);
    a+b
} ;
var val = sum_1(1, 2);
console.log(val)
let obj = {
    name : 'ravi',
    details: function(){
        console.log(this);// obj
        var selfThis = this;
        function run(){
            console.log(selfThis);// obj
            console.log(this);// window
        }
        run();
    }
}
obj.details();
// let obj1 = {
//     name : 'ravi',
//     details: () => {
//         console.log('lambda or arrow fn this val',this);// window
//         var selfThis = this;
//         var run = () => {
//             console.log('lambda or arrow fn this val',selfThis);// window
//             console.log('lambda or arrow fn this val',this);// window
//         }
//         run();
//     }
// }
// arrow functions always have by default parent scope but normal function by default have window scope.
// Parent can be object or window

var obje = {
    run:()=>{
        console.log(this);
    }
}
obje.run();
function run (){
    console.log(this);
}
window.run();
var test = () =>{
    console.log(this);
}
test();
let obj1 = {
    name : 'ravi',
    details: function(){
        console.log('lambda or arrow fn this val',this);// window
        var selfThis = this;
        var run = () => {
            console.log('lambda or arrow fn this val',selfThis);// window
            console.log('lambda or arrow fn this val',this);// window
        }
        run();
    }
}
obj1.details();