var sentence= "    hello Angular girles    ";
console.log(sentence.length);

var trimString = sentence.trim();
console.log(`after triming length: ${trimString}`);

console.log(`count =  `,trimString.length);

console.log(`last position:${trimString.length-1}`);

console.log(`first character:${trimString.charAt(0)}`);

var positionOfLastChar=trimString.length-1;
var lastCharacter=trimString.charAt(positionOfLastChar);
console.log(`last character:${lastCharacter}`);

var extraSpace=sentence.length-trimString.length;
console.log(`extra space:${extraSpace}`);

console.log(`${trimString.substring(1,8)}`);

console.log(`${trimString.slice(0,8)}`);

//count word in the string
var splitString=trimString.split(" ");
console.log(`total word:${splitString.length}`);

//count spaces in  the string
var splitString=trimString.split(trimString);
console.log(`total spaces:${splitString.length}`);

console.log(`---------------------------------------------------------------------------`);

var string2 = "hard work always pays back";
var splitString = string2.split(" ");
console.log(`${splitString}`);
// if (splitString != " ") {
//     console.log(`${splitString}`);
// }

var trimstring = string2.trim( );
console.log(`${trimString}`);