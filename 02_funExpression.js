var myName ="Pooja";
console.log(myName); 

// Function Expression
var showResult =function(){
    console.log("show..........");
};
showResult();

// we can store a function as value in js
var  substraction = function(num1,num2) {
    var result = num1 - num2;
    console.log("substraction:",result);
    return result;
}
var result = substraction(45,20);
console.log(result);

