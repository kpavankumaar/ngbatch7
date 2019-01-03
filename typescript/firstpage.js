// install node from nodejs.org
// install typescript with npm 
// tsc to transpile the ts file to js file 
let num = 20;
num = 30;
function sum(a, b) {
    console.log(a + b);
}
sum(10, '20');
for(let i = 0; i < 10 ; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}