// install node from nodejs.org
// install typescript with npm 
// tsc to transpile the ts file to js file 
interface ObjDefinition{
    [key:string]:number|string|Array<string|number>;
}
interface ObjFn{
    name: string;// required property
    age : number;// required property
    degree?: string; // optional property
}
let empDetails: ObjFn;
empDetails = {
    name:'krishna',
    age: 35,
}

let num:number = 20;
const name_1:string = 'krishna';
name_1 = 'ravi';
const obj1:{name:any} = {
    name:'krishna',
    age: 10
}
const obj:ObjDefinition = {
    name: 'ravi',
    age: 55,
    degrees: []
}
obj.name = 'pavan';
const friendList:any[] = ['ravi','krishna','radhe',10];
// const friendList:Array<string|number> = ['ravi','krishna','radhe',10];
friendList.push('balaram');
friendList.pop()
num = 30;
function sum(a,b:number):number{
    console.log(a+b);
    return 10;
}
sum(10,'20');

