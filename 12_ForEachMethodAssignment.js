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

console.log(`1. Employee Of TCS`);
const arrayOfEmployee = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_viny, emp_mahi];
arrayOfEmployee.forEach((Employee) => {
    if(Employee.emp_company == "TCS"){
        console.log(`Company Name is: ${Employee.emp_company} Employee Name is: ${Employee.emp_name}`);
    }
})
console.log(`------------------------------------------------------------------------------------------------`);

console.log(`2. Employee Who have salary grater than equal to 50000 `);
const arrayofEmployee = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_viny, emp_mahi];
arrayofEmployee.forEach((Employee) => {
    if(Employee.emp_salary >= 50000){
        console.log(Employee.emp_id, Employee.emp_name, Employee.emp_dept, Employee.emp_company, Employee.emp_salary);
    }
})
console.log(`------------------------------------------------------------------------------------------------`);

console.log(`3. Sum of all Employee salary`);
const arrayOfEmployeeSalary = [50000, 47000, 74000, 45000, 40000, 75000, 85000];
let total = 0;
arrayOfEmployeeSalary.forEach(item =>{
    total += item;
});
console.log(total);
console.log(`------------------------------------------------------------------------------------------------`);

console.log(`4. Find the Average Salary `);
totalEmployee = arrayOfEmployee.length;
console.log(`Total Numbers Of Employee is: ${totalEmployee}`);
average= total / totalEmployee;
console.log(`Average of Salary is: ${average}`);
console.log(`------------------------------------------------------------------------------------------------`);

console.log(`5. Find "IT" OR "HR" Department Employees Whose salary is grater than equal to 75000 `);
const arrayOf_Employee = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_viny, emp_mahi];
arrayOf_Employee.forEach((Employee) => {
    if((Employee.emp_dept =="IT" || Employee.emp_dept =="HR")&& Employee.emp_salary >= 75000){
        console.log(Employee.emp_id, Employee.emp_name, Employee.emp_dept, Employee.emp_company, Employee.emp_salary);
    }
})