console.log(`A.`);
console.log(`Create a class 'Bank' with Data Members Using Constructor`);
console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`B.`);
console.log(`Create Objects`);
console.log(`-------------------------------------------------------------------------------------------------------`);

class Bank  {
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate
    }
}

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
console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`C.`);
console.log(`Create a Map in such way that key should be accountNo and value is Object`);

const mapOfBank = new Map();
mapOfBank.set(6578943219, axis_bank);
mapOfBank.set(6321943219, sbi_bank);
mapOfBank.set(6571989432, icici_bank);
mapOfBank.set(6321965789, kotak_bank);
mapOfBank.set(6572198943, hdfc_bank);
mapOfBank.set(6195789432, punjab_bank);

const keyofMapBank = mapOfBank.keys();
console.log(keyofMapBank);
console.log(`-------------------------------------------------------------------------------------------------------`);

console.log(`D.`);
console.log(`Traverse the map, Log bankName, accountNo And interestRate for each Object`);

for (const key of keyofMapBank) {
    const bank = mapOfBank.get(key)
    console.log(bank.bankName, bank.accountNo, bank.interestRate);
}
