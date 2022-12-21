console.log(`1.------------------------------------------------------`);
var index=5;  
while (index<=15) {  
   console.log(index);  
   index++; 
}

console.log(`2.------------------------------------------------------`);
var index =50;
while (index>=40) {
    console.log(index);
    index =index-1;
}

console.log(`3.------------------------------------------------------`);
index = 1;
while (index<=30) {
    if(index%2 == 1){
        console.log(`ODD Number ${index}`);
    }
    index = index+1;
}

console.log(`4.------------------------------------------------------`);
index=1;
while (index<=20) {
    if(index%2 == 0){
        console.log(`Even Number ${index}`);
    }
    index = index+1;
}

console.log(`5.------------------------------------------------------`);
var index=5;
do {
    console.log(index);
    index= index+5;
} while (index<=50);

console.log(`6.------------------------------------------------------`);
var index=10;
do {
   console.log(index); 
   index= index+10;
} while (index<=100);

console.log(`7.------------------------------------------------------`);
var index =100;
do {
  console.log(index);
   index = index-10; 
} while (index>=10);