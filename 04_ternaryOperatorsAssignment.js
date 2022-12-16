console.log(`------------------------------------ Assignment No. 1 -------------------------------------------------`);
console.log(`1.`);
var gratestNumber = function(num1, num2){
      var result = num1 > num2 ? num1 : num2;
      console.log(`Given Number is ${num1} ${num2} Gretest number is: ${result}`);
}
gratestNumber(10,-10);
gratestNumber(800,899);

console.log(`2.`);
var evenOrOdd = function(value1){
     var res = value1%2==0 ? "Even" : "Odd" ;
     console.log(`The Number ${value1} is : ${res}`);
}
evenOrOdd(29);
evenOrOdd(44);
evenOrOdd(0);
evenOrOdd(101);

console.log(`3.`);
var evenOrOddLength = function(value2){
    var len = value2.length;
    var resultIs = len%2==0 ? "Even" : "Odd" ;
    return resultIs;
}
var res = evenOrOddLength("Javascript");
console.log(`Length of word Javascript and is :${res} `);
var res1 = evenOrOddLength("Developer");
console.log(`Length of word Developer and is :${res1} `);
var res2 = evenOrOddLength("Google");
console.log(`Length of word Google and is :${res2} `);

console.log(`------------------------------------ Assignment No. 2 -------------------------------------------------`);
console.log(`1.`);
function maleMarrigeEligibility(gender, age, boyName) {
    var result = (gender="Male" && age>=21)  ? `Hey boy ${boyName} You are Eligible for Marrige` : `Hey boy ${boyName} You Not Eligible for Marrige`;
    console.log(`${result}`);
}
maleMarrigeEligibility("Male",25,"Billgates");
maleMarrigeEligibility("Male",17,"Stew Jobs");

console.log(`2.`);
function femaleMarrigeEligibility(gender, age, girlName) {
    var result = (gender="Male" && age>=18)  ? `Hey girl ${girlName} You are Eligible for Marrige` : `Hey girl ${girlName} You Not Eligible for Marrige`;
    console.log(`${result}`);
}
femaleMarrigeEligibility("Female",16,"Jenifer");
femaleMarrigeEligibility("Female",27,"Malinde Gates");