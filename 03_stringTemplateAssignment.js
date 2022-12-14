console.log(`================================== Assignment ===================================`);
console.log(`1. ==================================================================================`);
function squareOfWordLength(string) {
    var wordLength = string.length;
    var length_square = wordLength * wordLength
    console.log(`String Length is: ${wordLength}`);
    return length_square;
}
var result = squareOfWordLength("Javascript");
console.log(`1. "Javascript" word of square is: ${result}`);
var result = squareOfWordLength("Google Chrome");
console.log(`2. "Google Chrome" word of square is: ${result}`);
var result = squareOfWordLength("Developer Smart");
console.log(`3. "Developer Smart" word of square is: ${result}`);

console.log(`2. ==================================================================================`);

var fExpression = function() {
    var string ="I am Angular Developer";
    console.log(`Given a String: ${string}`);

    var sLength = string.length;
    console.log(`String Length is: ${sLength}`);

    var split_string = string.split(" ");
    var word_count = split_string.length;
    console.log(`Total Number of words in that String: ${word_count}`);

    var divided = sLength / word_count;
    console.log(`1. String Length Divided by Total Number of words: ${divided}`);

    var multiply = sLength * word_count;
    console.log(`2. String Length multiple by Total Number of words: ${multiply}`);
}
fExpression();