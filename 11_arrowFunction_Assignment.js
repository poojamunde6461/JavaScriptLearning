console.log(`1. Arrow Function Assign`);
let show = ()=>{
    console.log("Good Morning, Today is Monday");
}
show();
console.log(`-----------------------------------------------------------------------------------------------------`);

console.log(`2. Three Argument Passed and no return value`);
let multi = (n1, n2, n3)=>{
    console.log(`Value is: ${n1}, ${n2}, ${n3}`);
    console.log(`munltiplication is: ${n1*n2*n3}`);
}
multi(5, 5, 2);
console.log(`---------------------------------------------------------------------------`);
multi(10, 4, 1);
console.log(`-----------------------------------------------------------------------------------------------------`);

console.log(`3. Five Argument Passed and with return value`);
let addition = (a1, a2, a3, a4, a5)=> {
    console.log(`Value is: ${a1}, ${a2}, ${a3}, ${a4}, ${a5}`);
    let addRes1 = a1 + a2+ a3+ a4+ a5;
    // let addRes2 = a1+" "+ a2 +" "+  a3 +" "+ a4 +" "+ a5;
    return addRes1; 
}
let addRes1 = addition(100, 100, 200, 349, 756);
console.log(`Addtition of number is: ${addRes1}`);
console.log(`---------------------------------------------------------------------------`);
let addRes2 = addition("I am", " learning", " ES6", " features", " in depth.");
console.log(`Addtition of word is: ${addRes2}`);