console.log(`---------------------------- Assignment No. 1 ----------------------------------`);
console.log(`--------------------- [Employee Of TCS] ---------------------`);
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_Anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_Radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_Rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_Sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmployee = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_viny, emp_mahi];
const filterArray = arrayOfEmployee.filter( (Employee) =>{
    return Employee.emp_company == "TCS";
});
filterArray.forEach( (employee)=>{
    console.log(`Company Name is: ${employee.emp_company} Employee Name is: ${employee.emp_name}`);
});

console.log(`---------------------------- Assignment No. 2 ----------------------------------`);
console.log(`--------------------- [1. Employees Of Wipro] ---------------------`);
const arrayEmployee = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_viny, emp_mahi];
const filterOfArray = arrayEmployee.filter( (Employee) =>{
    return Employee.emp_company == "Wipro";
});
filterOfArray.forEach( (employee)=>{
    console.log(employee);
});

console.log(`--------------------- [2. Find All Employees From IT or HR Department] ---------------------`);
const array_Employee = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_viny, emp_mahi];
const filter_Array = array_Employee.filter( (Emp) =>{
    return Emp.emp_dept =="IT" || Emp.emp_dept =="HR";
});
filter_Array.forEach( (employee)=>{
    console.log(employee);
});

console.log(`--------------------- [3. Find All Employees Whose EmpId is Greater than 50] ---------------------`);
const array = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_viny, emp_mahi];
const filter = array.filter( (empId) => {
    return empId.emp_id > 50;
});
filter.forEach( (emp) =>{
    console.log(emp);
});

console.log(`--------------------- [4. Find All Employees Whose Name starts with "A", "V", "M"] ---------------------`);
const arrayEmp = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_viny, emp_mahi];
// const startsWith = 'A';
const result = arrayEmp.filter( (obj) => obj.emp_name.startsWith('A') || obj.emp_name.startsWith('V') || obj.emp_name.startsWith('M'))
    // return n.emp_name.match("A", "V", "M");
    console.log(result);
result.forEach( (name) =>{
    console.log(name);
});

console.log(`--------------------- [5. Find All Employees Average salary] ---------------------`);
const array_Emp = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_viny, emp_mahi];
let total = 0;
const res = array_Emp.filter((item) => total += item.emp_salary);
// const res = array_Emp.filter( (item) => {
//      return total += item.emp_salary;
// });
// console.log(total);
const Length = array_Emp.length;
const average = total / Length;
console.log(`Average Salary of All Employees is: ${average}`);


console.log(`--------------------- [6. Find the Average salary for "IT" Department] ---------------------`);
const array_OfEmployee = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_viny, emp_mahi];
const filter_OfArray = array_OfEmployee.filter( (Emp) =>{
    return Emp.emp_dept =="IT";
});
filter_OfArray.forEach( (employee)=>{
    console.log(employee);
});
let total1 = 0;
const sum = filter_OfArray.filter((item) => total1 += item.emp_salary);
// console.log(total1);
const length1 = filter_OfArray.length;
const averageOfIT = total1 / length1;
console.log(`Average Salary of All Employees is: ${averageOfIT}`);
