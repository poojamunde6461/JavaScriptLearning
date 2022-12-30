let interestRate = 8.6;
interestRate = 7.5;
console.log(interestRate);

// const interest = 8.6;
// interestRate = 7.5;
// console.log(interest);

const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company: "Microsoft",
    valuation: "130B $"
}
Object.freeze(billgates);  // object freezing

billgates.city ="Pune";
console.log(billgates);