console.log(`-------------------------------- Assignment OC ----------------------------------`);
var res = 0=='';
console.log(`Result of (0 == ''): ${res}`);

var res = 0=='0';
console.log(`Result of (0 =='0'): ${res}`);

var res = 0==false;
console.log(`Result of (0 == false): ${res}`);

var res = null==undefined;
console.log(`Result of (null == undefined): ${res}`);

var res = 1==[1];
console.log(`Result of (1 ==[1]): ${res}`);

var res = 1==true;
console.log(`Result of (1 == true): ${res}`);

var res = 1=='1';
console.log(`Result of (1 =='1'): ${res}`);

console.log(`------------------------ Assignment Ternary Operator and Function Expression -----------------------------`);

var interviewEligibility = function(gradScore, hscScore, sscScore,candidateName) {
    var result = (gradScore>=70 || hscScore>=80 || sscScore>=90) 
    ? `"Congrates" ${candidateName} you are eligible for TCS interview.`  
    : "Unfortunately you are not eligible for TCS interview.";
    return result;
}
var res = interviewEligibility(80,86,90,"Pooja");
console.log(`${res}`);
var res = interviewEligibility(70,56,55,"Radhaika");
console.log(`${res}`);
var res = interviewEligibility(60,79,88,"Madhav");
console.log(`${res}`);
