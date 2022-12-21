// print number 1 to 10
for (let index = 1; index <= 10; index++) {
    console.log(index);
    
}
console.log(`-------------------------------------------------------------`);

// print number 2 to 20
for (let index = 2; index <= 20; index++) {
    console.log(index);
    
}
console.log(`-------------------------------------------------------------`);

// 5 10 15 20 25 30....50
for (let index = 5; index <= 50; index=index+5) {
    console.log(index);
    
}
console.log(`-------------------------------------------------------------`);

// 50 45 40......5 
for (let index = 50; index >= 5 ; index=index-5) {
    console.log(index);
    
}
console.log(`-------------------------------------------------------------`);

// table 10 reverse order
for (let index = 10; index >= 1 ; index=index-1) {
   var result = index * 10;
    console.log(result);
    
}

console.log(`-----------------------------------------------While Loop------------------------------------------------`);
// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var i=0;  // i = 0 1 2  10  11
while (i<=10) {  // true true 
   console.log(i);  //0 1 2   10
   i++; // 1 2  10  11
}

console.log(`---------------------------------------------- Do While Loop ------------------------------------------------`);
// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var index =0;
do {
    console.log(index);
    index++;
} while (index<=10);

// Print 70 to 7 by decrementing each time 7
 // 70  63  56  
var index =70;
do {
  console.log(index);
   index = index-7; 
} while (index>=7);

