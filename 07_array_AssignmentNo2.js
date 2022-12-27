console.log(`----------------------------- Assignment No 2 ------------------------------------`);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`1.`);
let totalElements = arrayNumbers.length;
console.log(`Total Length of the given array is: ${totalElements}`);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`2.`);
let firstElement = arrayNumbers[0];
let lastElement = arrayNumbers[10];
console.log(`First Element of Array is: ${firstElement}  `);
console.log(`Last Element : ${lastElement}`);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`3.`);
let thirdLastElement = arrayNumbers[8];
console.log(`The Third Last Element in Array: ${thirdLastElement}`);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`4.`);
console.log(`All Even Number From Array.`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 2 == 0) {
      console.log(element);
    }
  }
console.log(`-----------------------------------------------------------------------------------`);

console.log(`5.`);
console.log(`All Odd Number From Array.`);
for (let index = 0; index < arrayNumbers.length; index++) {
      const element = arrayNumbers[index];
      if (element % 2 == 1) {
      console.log(element);
    }
  }
console.log(`-----------------------------------------------------------------------------------`);

console.log(`6.`);
console.log(`All Even index Position From Array.`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 0) {
      const element = arrayNumbers[index];
      console.log(element);
    }
    
  }
console.log(`-----------------------------------------------------------------------------------`);

console.log(`7.`);
console.log(`All Odd index Position From Array.`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 1) {
      const element = arrayNumbers[index];
      console.log(element);
    }
  }
console.log(`-----------------------------------------------------------------------------------`);

console.log(`8.`);
console.log(`Sum of all number from array`);
sumOfNum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumOfNum = sumOfNum + element; 
}
console.log(sumOfNum);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`9`);
console.log(`Multiple of 5 Numbers`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 5 == 0) {
    console.log(element);
  }
}
console.log(`-----------------------------------------------------------------------------------`);
    
console.log(`10.`);
console.log(`115 Number is available in array:`);
let isAvailable =  arrayNumbers.includes(115);
console.log(isAvailable);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`11.`);
console.log(`23 Number is available in array:`);
let availableNum =  arrayNumbers.includes(23);
console.log(availableNum);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`12.`);
console.log(`Insert Numbers 55 66 before index 3`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);
console.log(`-----------------------------------------------------------------------------------`);

console.log(`13.`);
console.log(`Delete 3 elements starting from index 4 `);
let deletElement = arrayNumbers.splice(4, 3);
console.log(deletElement);
console.log(arrayNumbers);
console.log(`-----------------------------------------------------------------------------------`);