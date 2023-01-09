// why we call function as first class citizen in js
// 1.we can store function as a value

let functionExpr = function(){
    console.log(`Inside function Expression`);
}
functionExpr();
console.log(`------------------------------------------------------------------------------`);


// 2. we can return function from another function 

function outer(){
    let display = function (){
        console.log(`Inside Display function `);
    }
    return display;

}
// outer()();
let innerFun = outer();
innerFun();
console.log(`------------------------------------------------------------------------------`);


// we can pass function as argument to another function 

function anotherFunction(){
    console.log(`I am inside Another function....`);
}
function show(myNumber){
    myNumber();
}
show(anotherFunction);