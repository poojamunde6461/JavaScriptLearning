console.log(`----------------------------------- Control Flow Assignment ---------------------------------------`);
console.log(`1.---------------------------`);
var sentence = "i am very good IT Developer";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy = char.toLowerCase();
    if (charCopy=="a" || charCopy=="e" || charCopy=="i" || charCopy=="o" || charCopy=="u") {
        console.log(char);
        counter = counter + 1;
    }
}
console.log(`Total vowels in string is : ${counter}`);

console.log(`---------------------------------------------------------------------------------------------`);
console.log(`2.`);
var sumOfCubeOfNumber = function(){
        var sumOfCub = 0;
            for (let index = 1; index <= 5; index=index+1) {
                var sumOfCub = sumOfCub+(index * index * index);
            }
            console.log(`Sum Of Cube Of Numbers 1 to 5:${sumOfCub}`); 
        }
        sumOfCubeOfNumber();

// var sumOfCubeOfNumber = function(num){
//     var sumOfCub = 0;
//         for (let index = 1; index <= num; index=index+1) {
//             var sumOfCub = sumOfCub+(index * index * index);
//         }
//         console.log(`${sumOfCub}`); 
//     }
//     sumOfCubeOfNumber(4);
//     sumOfCubeOfNumber(5);
//     sumOfCubeOfNumber(2);
//     sumOfCubeOfNumber(3);



console.log(`---------------------------------------------------------------------------------------------`);
console.log(`3.1............`);
function oddPositionedChars() {
    var str = "Hard Work always pays back";
    
    var splitStr = str.split(" ").join("");
    console.log(`Removing Spaces in String: ${splitStr}`);
    for (let index = 0; index <= splitStr.length; index++) {
        if(index %2 == 1){
            var oddPosition=splitStr.charAt(index);
            console.log(`Odd Positioned Chars: ${oddPosition}`);
         }
        }
}
oddPositionedChars();

console.log(`3.2............`);
function evenPositionChar(){
    var str2 = "Soon I will be Angular IT Champ";
    var splitStr2 = str2.split(" ").join("");
    console.log(`Removing Spaces in String:${splitStr2}`); 
     for (let index = 0; index <= splitStr2.length; index++) {
        if(index %2 == 0){
            var evenPosition=splitStr2.charAt(index);
            console.log(`Even Positioned Chars: ${evenPosition}`);
     }
    }
}
evenPositionChar();

console.log(`---------------------------------------------------------------------------------------------`);
console.log(`4. Factorial Number`);
function factorialNumber(number){
    var result = 1;
    for (let index = 1; index <= number; index++) {
       result = index * result;   
    }
    return result;
    }
    console.log(`Factorial of 5 is: ${factorialNumber(5)}`);
    console.log(`Factorial of 7 is: ${factorialNumber(7)}`);
    console.log(`Factorial of 8 is: ${factorialNumber(8)}`);
    console.log(`Factorial of 12 is: ${factorialNumber(12)}`);

