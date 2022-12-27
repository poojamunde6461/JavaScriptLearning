console.log(`----------------------------- Assignment No 1 ---------------------------------------------------------------------`);

const fruits_Seasonal =["Banana", "Orange", "Apple", "Mango", "water_Melon"];
console.log(fruits_Seasonal);

let firstFruit = fruits_Seasonal[0];
let lastFruit = fruits_Seasonal[4];
console.log(`1.`);
console.log(`First Element of Array is: ${firstFruit}  `);
console.log(`Last Element of Array is : ${lastFruit}`);

console.log(`2.`);
console.log(`Add Papaya Before Banana.`);
fruits_Seasonal.splice(0, 0 , "Papaya");
console.log(fruits_Seasonal);

console.log(`3.`);
console.log(`Remove Mango From Array.`);
let removeMango =fruits_Seasonal.splice(4, 1);
console.log(removeMango);
console.log(fruits_Seasonal);

console.log(`4.`);
console.log(`Add Pineapple at last index.`);
fruits_Seasonal.push("Pineapple");
console.log(fruits_Seasonal);

console.log(`5.`);
console.log(`Insert Dragan Fruit before Water_mealon.`);
fruits_Seasonal.splice(5, 0 , "Dragan_Fruit");
console.log(fruits_Seasonal);

console.log(`6.`);
console.log(`Replace "Orange" with "kiwi".`);
console.log(fruits_Seasonal);
fruits_Seasonal.splice(2, 1 , "Kiwi");
console.log(fruits_Seasonal);

console.log(`7.`);
console.log(`Index Starting From 1 To 4.`);
let sliceResult = fruits_Seasonal.slice(1, 4);
console.log(sliceResult);

console.log(`8.`);
console.log(`Select Last 3 Elements using Length Property`);
let sliceRes = fruits_Seasonal.slice(4, 8);
console.log(sliceRes);


