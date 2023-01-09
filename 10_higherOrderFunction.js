// higher order function
function anotherFunction(){
    console.log(`I am inside Another function....`);
}
function show(myNumber){   // myNumber is an argument
    myNumber();
    let innerFunction = function(){
        console.log(`Inner Function..........`);
    }
    return innerFunction;
}
let inner = show(anotherFunction);
inner();