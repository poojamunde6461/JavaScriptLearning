var dayNumber = 1;
switch (dayNumber) {
    case 1:
        console.log(`Today is Monday`);
        break;
    case 2:
        console.log(`Today is Tuesday`);
        break;
    case 3:
        console.log(`Today is Wednesday`);
        break; 
    case 4:
        console.log(`Today is Thursday`);
        break;
    case 5:
        console.log(`Today is Friday`);
        break;
    case 6:
        console.log(`Today is Saturday`);
        break;
    case 7:
        console.log(`Today is Sunday`);
        break;           
    default:
        console.log(`Not Valid Value Provide`);
        break;
}
console.log(`After Switch Case Statement`);

function gender_check(gender) {
    switch (gender) {
        case "Male":
            console.log("You are Man");
        break;  
        case "Female":
            console.log("You are Woman");
            break;
        case "Others":
            console.log("You are Transgender");
            break;
        default:
            console.log("Invalid input");
            break;
    }

}
gender_check("Male");

function gender_check_return(gender) {
    switch (gender) {
        case "Male":
            return "You are Man";
        break;  
        case "Female":
            return "You are Woman";
        break;
        case "Others":
            return "You are Transgender";
        break;
        default:
            return "Invalid input";
        break;
    }

}
var result = gender_check_return("Female");
console.log(result);
