console.log(
  "----------------------------------- Function Expression Assignment -------------------------------------"
);
console.log(
  "---------------------------------------------------------------------------------------------------------"
);
console.log("1.");
var square = function (num) {
  console.log("Square of Num:", num, "=", num * num);
};
square(5);
square(6);
square(25);
square(100);
console.log(
  "---------------------------------------------------------------------------------------------------------"
);
console.log("2.");
console.log("Type Of The Variable is:", typeof square);

console.log(
  "---------------------------------------------------------------------------------------------------------"
);
console.log("3.");
var rectangle = function (length, width) {
  console.log("The Area Of Given Rectangle is:", length * width);
};
rectangle(499, 917);
console.log(
  "---------------------------------------------------------------------------------------------------------"
);
console.log("4.");
var swapValues = function (value1, value2) {
  console.log("Before Swap:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap:", value1, value2);
};
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log(
  "---------------------------------------------------------------------------------------------------------"
);
console.log("5.");
var string = "JS the most popular language";
console.log("A. Total character available in the string:", string.length);

console.log("B. Char at index 6:", string.charAt(6));

console.log("C. Char at index 11:", string.charAt(11));

var total = string.length;
console.log("D. Last Character is:", string.charAt(total - 1));

console.log("E. First Character is:", string.charAt());

// console.log("F. Square of length of string is:", string.length * string.length);

var squareOf = string.length;
console.log("F. Square of length of string is:", squareOf * squareOf);
