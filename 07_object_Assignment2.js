
const sbiBank = {
    bankName: 'SBI Bank',
    location: 'Pune',
    accountNo: 9876543210,
    IFSC: 'SBI005678',
    interestRate: 6.5
}


const axisBank = {
    bankName: 'Axis Bank',
    location: 'Mumbai',
    accountNo: 7676543210,
    IFSC: 'AXIS005678',
    interestRate: 5.5
}


const hdfcBank = {
    bankName: 'HDFC Bank',
    location: 'Solapur',
    accountNo: 4321098765,
    IFSC: 'HDFC005678',
    interestRate: 4.5
}


const yesBank = {
    bankName: 'YES Bank',
    location: 'Satara',
    accountNo: 7721098765,
    IFSC: 'YES005678',
    interestRate: 6.2
}

function bankName() { 
    console.log(`--------------- SBI Bank -----------------`);
    console.log(sbiBank);
    console.log(`--------------- AXIS Bank -----------------`);
    console.log(axisBank);
    console.log(`--------------- HDFC Bank -----------------`);
    console.log(hdfcBank);
    console.log(`--------------- YES Bank -----------------`);
    console.log(yesBank);
}
bankName();
