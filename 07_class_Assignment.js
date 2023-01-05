console.log(`------------------------------------------- Assignment ----------------------------------------------`);
console.log(`1. Create 5 Object from Vehicle Class Using Constructor.`);
class Vehicle {
    constructor(model, color, type, seat, mileage ) {
        this.model = model;
        this.color = color;
        this.type = type;
        this.seat = seat;
        this.mileage = mileage
    }
}

let marutiSuzuki = new Vehicle("Swift Dzire", "Red", "Sport", 4, "22.6 kmpl");
let tata = new Vehicle("Tata Nexon", "White", "Sport", 4, "18.9 kmpl");
let hyundai = new Vehicle("Creta", "Black", "Sport", 4, "14.7 kmpl");
let toyota = new Vehicle("Fortuner", "White", "Sport", 7, "16.5 kmpl");
let mahindra = new Vehicle("Thar", "Red", "Sport", 4, "15.2 kmpl");

console.log(mahindra);
console.log(toyota);
console.log(hyundai);
console.log(marutiSuzuki);
console.log(tata);
console.log(`-------------------------------------------------------------------------------------------------------`);


console.log(`2. Using Constructor and Member function to log the details of College and Created 4 Object. `);
class College {
    constructor(collegeId, collegeName, noOfDept, location, pinCode){
        this.collegeId = collegeId;
        this.collegeName = collegeName;
        this.noOfDept = noOfDept;
        this.location = location;
        this.pinCode = pinCode
    }
    details (){                                                   // use member function
             console.log(this.collegeId, this.collegeName, this.noOfDept, this.location, this.pinCode);
         }
}

let c1 = new College(234516, "IBMR", 5, "Pune Wakad", 411057);
let c2 = new College(134516, "JSPM", 7, "Mumbai", 413067);
let c3 = new College(234516, "Indira", 12, "Pune Wakad", 411057);
let c4 = new College(345678, "D Y Patil", 10, "Banglor",456087);
c1.details();
c2.details();
c3.details();
c4.details();
console.log(`-------------------------------------------------------------------------------------------------------`);


console.log(`3. Create traversObject() with 1 arg travers the complete given object using For in loop and
 log the output (key, element) and call this function by passing one by one object of College class.........`);

function traverseObject(College){
    for (const key in College) {
        if (Object.hasOwnProperty.call(College, key)) {
            const element = College[key];
            console.log(`${key}: ${element}`);
        }
    }
}
traverseObject(c1);
console.log(`--------------------------------------------------------------`);
traverseObject(c2);
console.log(`--------------------------------------------------------------`);
traverseObject(c3);
console.log(`--------------------------------------------------------------`);
traverseObject(c4);
console.log(`-------------------------------------------------------------------------------------------------------`);


console.log(`5. Given Number is Prime OR Not. `);
// Prime Number 11 --> 11%2 ==0  11%3==0  11%4==0  11%5==0  11%10==0
function prime_number(prime) {
    for (let index = 2; index < prime; index++) {
        if(prime%index == 0 ) {
            return "Not a Prime Number";
        } 
    }
    return "Prime Number";

}
console.log(`3 is  ${prime_number(3)}`);
console.log(`4 is  ${prime_number(4)}`);
console.log(`11 is  ${prime_number(11)}`);
