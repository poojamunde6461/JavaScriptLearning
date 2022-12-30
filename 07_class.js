class Employee{
    constructor(name, id, age, city){
        this.name = name;
        this.id = id;
        this.age = age;
        this.city = city;
    } 

    details (){                                                   // use member function
        console.log(this.name, this.id, this.age, this.city);
    }
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
// console.log(empSmith);
// console.log(empJay);
// console.log(empBill.name, empBill.id, empBill.age, empBill.city);  // access name,id,age,city
empSmith.details();
empJay.details();

console.log(`======================= Assignment practice ============================`);
function traverseRes(Employee){
    for (const key in Employee) {
        if (Object.hasOwnProperty.call(Employee, key)) {
            const element = Employee[key];
            console.log(key, element);
        }
    }
}
traverseRes(empBill);
console.log(`--------------------------------------------------------------`);
traverseRes(empJay);
console.log(`--------------------------------------------------------------`);
traverseRes(empSmith)

class student{
        constructor(name, rollNo, age, graduation){
            this.name = name;
            this.rollNo = rollNo;
            this.age = age;
            this.graduation = graduation
        }
    }

let s1 = new student("Pooja", 234, 25);
let s2 = new student("Madhav", 934, 27);
console.log(s1);
console.log(s2);

let isInstance = s1 instanceof student;
console.log(isInstance);
// Object is an instance of class
