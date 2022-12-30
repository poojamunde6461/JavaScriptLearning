var index = 0;
while (index<=10) {
   console.log(index);// 0 1
   if (index==5) {
     break;
   } 
   index++;
}
console.log(`---------------------------------------------------------------------------`);

for (let index = 0; index < 20; index++) {
   console.log(index);
   if (index>=12) {
     break;
   }
    
}
console.log(`-----------------------------------------------------------------------------`);

for (let index = 0; index < 10; index++) {
    //console.log(index); // 0 1  2 3
    if (index==4) {
      continue;
    }
    console.log(index);
 
 }
 
