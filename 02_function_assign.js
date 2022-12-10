console.log("--------------------------------------- Function Assignment ---------------------------------------");
console.log("1.");
function javaScript() {
    console.log("I Love JavaScript");
}
javaScript();

function learn() {
    console.log("I Am Learning JavaScript");
}
learn();

console.log("2.");
function personalDetails(firstName, lastName, collegeName) {
   console.log("First Name:",firstName); 
   console.log("Last Name:", lastName);
   console.log("College Name:", collegeName);
}
personalDetails("Pooja","Munde","College Of Computer Science(IBMR)");

console.log("3.");
function swap_values(value1,value2) {
    console.log("Before Swap:", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap:", value1, value2);  
}
swap_values("virat", "Anushka");
swap_values(1000 , 2000);

console.log("4.");
function addThreeValues(val1,val2,val3) {
    console.log("Befor Adding:",val1,val2,val3);
    console.log("After Adding:",val1 + val2 + val3); 
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello","Good", "Morning");