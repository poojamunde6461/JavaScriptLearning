const car ={
    carName: "Creta SX",
    company: "Hyundai",
    launchYear: 2017
}

const carEngin ={
    enginPower: "1499CC",
    maxPower: "113 BHP"
}

console.log(`Given Object is:`);
console.log(car);
console.log(carEngin);
console.log(`--------------------------------------------------------------------------------------------------`);

console.log("===== 1. Object merge using Object.assign() ======");
Object.assign(car, carEngin);
console.log(car);
// console.log(carEngin);
console.log(`--------------------------------------------------------------------------------------------------`);

console.log("===== 2. Object merge using spread operator ======");
let mergeObject = {...car, ... carEngin};
console.log(mergeObject);