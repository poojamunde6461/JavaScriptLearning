console.log(`A. Create a Class with Data Members Using Constructor`);
class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate
    }
}
// console.log(Bank);
console.log(`B. Create Objects`);
let axis_bank = new Bank("Axis Bank", "Pune", 6578943219, "AXIS007654", 5.6);
let sbi_bank = new Bank("SBI Bank", "Solapur", 6321943219, "SBI004354", 7.7);
let icici_bank = new Bank("ICICI Bank", "Mumbai", 6571989432, "ICICI007554", 8.3);
let kotak_bank = new Bank("Kotak Bank", "Sangali", 6321965789, "KOTAK001254", 4.9);
let hdfc_bank = new Bank("HDFC Bank", "Satara", 6572198943, "HDFC009754", 7.2);
let punjab_bank = new Bank("Punjab Bank", "Banglore", 6195789432, "PUNJAB005654", 6.6);
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);
console.log(`-----------------------------------------------------------------------------------------------------------`);


console.log(`C. Add all Object Elements in a Array and Traverse this array using for of loop then Log on Console
                Bank Name And Location`);
let arrayOfBank = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, punjab_bank];
    for (const Bank of arrayOfBank) {
        console.log(`Bank Name: ${Bank.bankName}, Location:${Bank.location}`);
    }
console.log(`-----------------------------------------------------------------------------------------------------------`);


console.log(`D. Find the Object which has name kotak bank using for of loop.`);

for (const Bank of arrayOfBank) {
    if(Bank.bankName == "Kotak Bank"){
         console.log(`Bank Name is : ${Bank.bankName}`);
    }
}
console.log(kotak_bank);
console.log(`-----------------------------------------------------------------------------------------------------------`);

console.log(`D. Log the Details On Console using for of loop .`);
for (const Bank of arrayOfBank) {
    console.log(Bank);
}
