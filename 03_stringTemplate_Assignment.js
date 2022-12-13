console.log(
  `----------------------- String Template Assignment No.1 ------------------------------`
);
console.log(`1.`);
function stringTemplateAssign() {
  console.log(`My dream company is "My dream company name is TCS"`);
}
stringTemplateAssign();

console.log(
  `----------------------------------------------------------------------------------`
);
console.log(`2.`);
var hobby1 = "Singing";
var hobby2 = "Swimming";
var hobby3 = "Watching Cricket";
console.log(
  `Log All Hobbies on Console on Same Line Hobby1: ${hobby1} Hobby2: ${hobby2} Hobby3: ${hobby3}`
);

var result = hobby1 + hobby2 + hobby3;

var result = hobby1.concat(" ", hobby2, " ", hobby3);
console.log(`Concat Hobbies Using String Template: ${result}`);

console.log(
  `----------------------- String Template Assignment No.2 ------------------------------`
);

var stringFunction = function(){
    var str ="     Hey you are doing good, keep it up      ";
    console.log(`1.`);
    console.log(`Given String is: ${str}`);
    console.log(`2.`);
    console.log(`Length Of The String: ${str.length}`);

    console.log(`3.`);
    var trimString = str.trim();
    console.log(`String After Removing Extra Spaces: ${trimString}`);

    console.log(`4.`);
    var extra_Space = str.length - trimString.length;
    console.log(`Total Number of Remove Extra Spaces: ${extra_Space}`);

    console.log(`5.`);
    var pos_of_last_char = trimString.length -1;
    var Last_char = trimString.charAt(pos_of_last_char);
    var firstChar = trimString.charAt(0);
    console.log(`Print First And Last Character On The Same Line: ${firstChar} ${Last_char} `);

    console.log(`6.`);
    var split_string = trimString.split(" ");
    var count_word = split_string.length;
    console.log(`Total Words Available in the String After Trim: ${count_word}`);

    console.log(`7.`);
    var index_of = trimString.indexOf("good");
    console.log(`Index Of Word: ${index_of}`);

    console.log(`8.`);
    var subString = trimString.substring(22);
    console.log(`The substring starting from index 22:  ${subString}`);

    console.log(`9.`);
    var ends_with = trimString.endsWith("up");
    console.log(`The string ends with word "up" : ${ends_with}`);

    console.log(`10.`);
    var starts_with = trimString.startsWith("Hey");
    console.log(`The string starts with word "Hey" :${starts_with}`);
}
stringFunction();
