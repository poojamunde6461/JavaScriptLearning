console.log(`--------------------------------- Assignment if_Block -------------------------------------------`);
console.log(`1.---------------------------------`);
var eligibleForVote = function(age){
    if (age>=18 && age<120){
        console.log(`you are age is ${age} :you are eligible for voting.`);  
    }
    if(age<18 && age>0){
        console.log(`you are age is ${age} :you are not eligible for voting.` );
    }
    if (age <= 0 || age>=120) {
        console.log(`your age is ${age} :invalid data`);
     }
}
eligibleForVote(45);
eligibleForVote(17);
eligibleForVote(8);
eligibleForVote(20);
eligibleForVote(-10);
eligibleForVote(200);
eligibleForVote(0);

console.log(`2.------------------------------------`);
var gradeCalculation = function(marks){
  if(marks>=90 && marks<100){
    console.log(`Fantastic Marks: ${marks} Your Grade is A+`);
  }
  if(marks>=75 && marks<90){
    console.log(`Excellent Marks: ${marks} Your Grade is A`);
  }
  if(marks>=50 && marks<75){
    console.log(`Good Marks: ${marks} Your Grade is B`);
  }
  if(marks>=35 && marks<50){
    console.log(`Marks: ${marks} Your Grade is c, Need improvement`);
  }
  if(marks<35 && marks>0){
  console.log(`Marks: ${marks} You are fail`);
  }
  if(marks <= 0 || marks > 100){
    console.log(`Mark is ${marks} Please Provide the valid Marks`);
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(-7);
