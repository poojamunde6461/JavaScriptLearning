const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Given Array is:`);
console.log(array_numbers);
console.log(`----------------------------------------------------------------------------------------------------------------`);

console.log(`1. Array Elements With its Index`);
array_numbers.forEach(function(value, index){
    console.log(`index is : ${index} And its Elements is : ${value}`);
})
console.log(`----------------------------------------------------------------------------------------------------------------`);

console.log(`2. Find Positive Numbers using forEach with arrow Function`);
console.log(array_numbers);
const arrayOfPositive = [];
array_numbers.forEach(function(value){
    if(value >= 0){
        arrayOfPositive.push(value)
        console.log(value);
    }
});
console.log("Array of Positive numbers :");
console.log(arrayOfPositive);

console.log(`----------------------------------------------------------------------------------------------------------------`);

console.log(`3. Find Negative Numbers using forEach with arrow Function and Log new Array on Console `);
console.log(array_numbers);
const arrayOfNegative = [];
array_numbers.forEach(function(value){
    if(value < 0){
        arrayOfNegative.push(value)
        console.log(value);
    }
});
console.log("Array of Negative numbers :");
console.log(arrayOfNegative);

console.log(`----------------------------------------------------------------------------------------------------------------`);

console.log(`4. Find the even Numbers using forEach with arrow Function`);
console.log(array_numbers);
const arrayOfEven = [];
array_numbers.forEach(function(value){
    if(value%2==0){
        arrayOfEven.push(value)
        console.log(value);
    }
});
console.log("Array of even numbers :");
console.log(arrayOfEven);
console.log(`----------------------------------------------------------------------------------------------------------------`);

console.log(`5. Sum Of All Elements And Log on console`);
console.log(array_numbers);
let total = 0;
array_numbers.forEach(item =>{
    total += item;
});
console.log(total);
console.log(`----------------------------------------------------------------------------------------------------------------`);

console.log(`6. Log Only Even Positioned Array Value on console Numbers using forEach and arrow Function`);
console.log(array_numbers);
evenPosition = [];
array_numbers.forEach(function(value, index){
    if(index%2==0){
        evenPosition.push(index)
        console.log(`index is : ${index} And its Elements is : ${value}`);
    }
});
console.log(`Even Positioned Array is :`);
console.log(evenPosition);