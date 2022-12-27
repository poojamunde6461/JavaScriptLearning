var practice = function (number) {
  if (number % 2 == 0) {
    console.log(`even ${number}`);
  } else {
    console.log(`odd ${number}`);
  }
};

practice(7);
practice(8);
practice(9);
practice(10);


console.log(`---------------------------------------------------------------------`);

var string ="I Am Angular Developer"

console.log(`Given string is: ${string}`);
    var ends_with = string.endsWith("Developer");
    console.log(`The string ends with word "up" : ${ends_with}`);

    var starts_with = string.startsWith("I");
    console.log(`The string starts with word "Hey" :${starts_with}`); 
    
    var splitstring = string.split(" ");
    console.log(`count word: ${splitstring.length}`);

    var splitstring= string.split(string);
    console.log(`Count Space : ${splitstring.length}`);

console.log(`-----------------------------------------------------------`);
var str="i am angular developer";
for (let index = 0; index < 10; index++) {
  console.log(str);
  
}
