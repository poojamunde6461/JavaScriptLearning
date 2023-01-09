
let globalVariable = 100;
function outer(){
    let outerVariable = 200;
    // console.log(globalVariable);   // 100
    let inner = function(){
        let innerVariable = 300;
        console.log(`Inner Function`);
        console.log(globalVariable);
        console.log(outerVariable);
        console.log(innerVariable);
   }
   return inner;
}
let returnValue = outer();
returnValue();
// outer()();  // we cal invoke inner function with like this


