
const arrayNums = [20, 3, 4, 56, 90, 400,49];
console.log(`Given Array is:`);
console.log(arrayNums);
let arrayOfNum = arrayNums;
arrayNums.push(55);
arrayNums.push(66);
// console.log(arrayNums);
console.log(`1. Shallow clone on arrayNums , update array with values --> 55, 66`);
console.log(arrayOfNum);
console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`2.`);
let arrayCloneIs = [... arrayNums];
arrayNums.push(10);
arrayNums.push(25);
console.log(`1. Deep clone using spred operator, update array with values --> 10, 25 at last position`);
console.log(arrayCloneIs);
console.log(arrayNums);
console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`3.`);
const arrayEven = [2, 30, 14, 8];
console.log(`Even Array is:`);
console.log(arrayEven);
let mergeObject = [...arrayEven, ... arrayNums];
console.log(`Merge or Concate array using spread Operator`);
console.log(mergeObject);
console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`4.`);
const employee_info ={
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality:{
            colony: "OM Vrindavan Society",
            street: "Kanch Pokali, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobile: ["+91 8600 3456 88", "1800 4567 32", "+91- 9096 5678 77"]
}
console.log(employee_info);
console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`5.`);
console.log(`A. Log the Address on console:`);
console.log(employee_info.address);
console.log(`--------------------------------------------------------------`);
console.log(`B. Log the Mobile Numbers on console:`);
console.log(employee_info.mobile);
console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`6.`);
console.log(`Before Salary:`);
console.log(employee_info.salary);
let empInfo = JSON.parse(JSON.stringify(employee_info));
empInfo.salary.july_month = "80 K";
console.log(`A. After salary update Property july month salary 80 k`);
console.log(empInfo.salary);
console.log(`----------------------------------------------------------------`);

console.log(`Before country:`);
console.log(employee_info.address);
empInfo.address.country = "United Kingdom";
console.log(`B. After update Property Country`);
console.log(empInfo.address);

console.log(`----------------------------------------------------------------`);
console.log(`C. Update Values Log on console:`);
console.log(empInfo.salary);
console.log(empInfo.address);
console.log(`C. Cloned Object Log on console:`);
console.log(empInfo);