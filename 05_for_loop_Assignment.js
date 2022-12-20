console.log(`=========================================Assignment===============================================`);
console.log(`Q.1. Print Number From 5 to 15`);
for (let index = 5; index < 16; index++) {
    console.log(index);;
    
}
console.log(`-----------------------------------------------------------`);
console.log(`Q.2. Print Number From 50 to 40`);
for (let index = 50; index >=40 ; index=index-1) {
    console.log(index);;
    
}
console.log(`-----------------------------------------------------------`);

console.log(`Q.3. First 15 ODD Numbers`);
for (let index = 0; index <= 30; index++) {
    if(index%2 == 1){
        console.log(`ODD Number ${index}`);
    }
}
console.log(`-----------------------------------------------------------`);

console.log(`Q.4. First 10 Even Numbers`);
for (let index = 0; index <= 18; index++) {
    if(index%2 == 0){
        console.log(`Even Number ${index}`);
    }
}
console.log(`-----------------------------------------------------------`);

console.log(`Q5. Print Table of 5`);
for (let index = 1; index <= 10; index++) {
    var result1= index * 5;
        console.log(` ${result1}`);
    
}
console.log(`-----------------------------------------------------------`);

console.log(`Q6. Print Table of 10`);
for (let index = 1; index <= 10; index++) {
    var result=index * 10;
        console.log(`${result}`);
    
}
console.log(`-----------------------------------------------------------`);
console.log(`Q7. Print Table of 10 in reverse order`);
for (let index = 10; index >= 1 ; index=index-1) {
    var result = index * 10;
     console.log(result);
     
 }
