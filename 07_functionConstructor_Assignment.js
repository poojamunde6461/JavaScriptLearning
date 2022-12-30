console.log(`1. & 2.`);
function Bank(bankName, location, ifscCode, branchCode){
    this.bankName =bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode
}
Bank.prototype.openTime= " 9 AM IST";
Bank.prototype.closeTime= " 6 PM IST";
let yesBank = new Bank("YES Bank", "Pune", "YES0876543", 76528756);
let sbiBank = new Bank("SBI Bank", "Mumbai", "SBI56776543", 45678756);
let mahBank = new Bank("Mahindra Bank", "Banglore", "MAH0876543", 34258756);
let axisBank = new Bank("AXIS Bank", "Satara", "AXIS0876543", 54328756);
console.log(yesBank);
console.log(sbiBank);
console.log(mahBank);
console.log(axisBank);
console.log(`---------------------------------------------------------------------------------------------------------`);

console.log(3.);
console.log(yesBank.openTime);
console.log(sbiBank.openTime);
console.log(mahBank.openTime);
console.log(axisBank.openTime);
console.log(`---------------------------------------------------------------------------------------------------------`);

console.log(4.);
console.log(yesBank.closeTime);
console.log(sbiBank.closeTime);
console.log(mahBank.closeTime);
console.log(axisBank.closeTime);
console.log(`---------------------------------------------------------------------------------------------------------`);

console.log(5.);
console.log(`BANK SBI OPEN TIME: ${sbiBank.openTime}, Bank SBI CLOSE TIME: ${sbiBank.closeTime}`);
console.log(`---------------------------------------------------------------------------------------------------------`);

console.log(6.);
console.log(`BANK NAME IS: ${axisBank.bankName}, AND CLOSE TIME IS: ${axisBank.closeTime}`);
console.log(`---------------------------------------------------------------------------------------------------------`);

console.log(7.);
console.log(`BANK NAME IS: ${yesBank.bankName}, BRANCH CODE IS: ${yesBank.branchCode} AND OPEN TIME IS: ${axisBank.openTime}`);

