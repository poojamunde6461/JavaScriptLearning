console.log(
  `---------------------------------- If else Assignment --------------------------------------`
);
console.log(`1.--------------------------------------------------`);
var votingEligibility = function (age) {
  if (age <= 0 || age > 120) {
    console.log(`Age is ${age} Invalid data: `);
  } else {
    console.log(`Age is ${age} Valid data:`);
    if (age >= 18) {
      console.log(`Congratulation you can vote: ${age}`);
    } else {
      console.log(`Sorry you are not eligible for vote: ${age}`);
    }
  }
};
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

console.log(`2.--------------------------------------------------`);
var gradeCalculation = function (marks) {
  if (marks <= 0 || marks > 100) {
    console.log(`* Mark is ${marks} invalid Marks`);
  } else {
    console.log(`* Mark is ${marks} Valid Marks`);
    if (marks >= 90 && marks < 100) {
      console.log(`Fantastic Marks: ${marks} Your Grade is A+`);
    } else {
      if (marks >= 75 && marks < 90) {
        console.log(`Excellent Marks: ${marks} Your Grade is A`);
      } else {
        if (marks >= 50 && marks < 75) {
          console.log(`Good Marks: ${marks} Your Grade is B`);
        } else {
          if (marks >= 35 && marks < 50) {
            console.log(`Marks: ${marks} Your Grade is c, Need improvement`);
          } else {
            if (marks < 35 && marks > 0) {
              console.log(`Marks: ${marks} You are fail`);
            }
          }
        }
      }
    }
  }
};
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
