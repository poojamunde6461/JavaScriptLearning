console.log(
  "--------------------------------------- Function Assignment No. 1  ---------------------------------------"
);
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
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("College Name:", collegeName);
}
personalDetails("Pooja", "Munde", "College Of Computer Science(IBMR)");

console.log("3.");
function swap_values(value1, value2) {
  console.log("Before Swap:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap:", value1, value2);
}
swap_values("virat", "Anushka");
swap_values(1000, 2000);

console.log("4.");
function addThreeValues(val1, val2, val3) {
  console.log("Befor Adding:", val1, val2, val3);
  console.log("After Adding:", val1 + val2 + val3);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");

console.log(
  "--------------------------------------- Function Assignment No. 2  ---------------------------------------"
);

function bankDetails(bankName, accountNum, location, pinCode) {
  console.log(
    "Bank Details:",
    "Bank Name:",
    bankName,
    "Account No:",
    accountNum,
    "Location:",
    location,
    "Pincode:",
    pinCode
  );
}
bankDetails("CITY Bank", 3456782345, "Pune", 431202);
bankDetails("Axis Bank", 7856782345, "Mumbai", 441202);
bankDetails("HDFC Bank", 8956782345, "Pune", 631202, "Open");
