console.log(`==================Traverse the Map Using forEach() Loop========================`);
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

const mapOfEmployees = new Map();
mapOfEmployees.set(22, emp_Anil);
mapOfEmployees.set(33, emp_Radha);
mapOfEmployees.set(55, emp_Rishi);
mapOfEmployees.set(66, emp_Sonali);
mapOfEmployees.set(77, emp_Monika);
mapOfEmployees.set(88, emp_viny);
mapOfEmployees.set(99, emp_mahi);

mapOfEmployees.forEach((EmployeeObject, regNo) => {
    console.log(`${regNo} ===> Name:${EmployeeObject.emp_name}, Dept:${EmployeeObject.emp_dept}, Company:${EmployeeObject.emp_company}, Salary:${EmployeeObject.emp_salary}`);
} );