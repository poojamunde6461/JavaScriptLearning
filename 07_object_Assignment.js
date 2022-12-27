const professor = {
    name: "Lorry",
    age: 23,
    company:'Google',
    height:5.9,
    degrees:{
        engineering:'CSC',
        PHD:'Adv_Computing',
        PostGraduation: 'CDAC',
        graduation: 'B-Teck',
        add: function() {
            return this.engineering+this.PHD+this.PostGraduation+this.graduation;
         },
         concatDegrre: [ 'CSC', 'Adv_Computing', 'CDAC', 'B-Teck']
    },
    certificates:{
        first:'Haker Rank Participation',
        second:'Certificate in IFE Course',
        third:'Certificate in Adv Programming'
    },
    
} 
console.log(`1.Create one Object Professor`); 
console.log(professor);
console.log(`--------------------------------------------------------------------------------------------------------------`);  

console.log(`2. Creating nested Object "Degrees"`); 
console.log(professor.degrees);
console.log(`--------------------------------------------------------------------------------------------------------------`);  

console.log(`3. Creating nested Object "certificates"`); 
console.log(professor.certificates);
console.log(`--------------------------------------------------------------------------------------------------------------`);  

console.log(`4. Concate All Degrees`); 
console.log(professor.degrees.add(" "));
console.log(`--------------------------------------------------------------------------------------------------------------`);  

console.log(`5. Add new Property city Mumbai`);
professor.city = 'Mumbai';
console.log(professor);
console.log(`--------------------------------------------------------------------------------------------------------------`);  

console.log(`6.Modify Existing Property name`);
professor.name = 'Mr.Chang';
console.log(professor);
console.log(`--------------------------------------------------------------------------------------------------------------`);  

console.log(`7.Delete One Certificate Second`);
console.log(professor.certificates);
delete professor.certificates.second;
console.log(professor.certificates);
console.log(`--------------------------------------------------------------------------------------------------------------`);  

console.log(`8.Add New Certificate`);
console.log(professor.certificates);
professor.certificates.fifth ='National Certificate';
console.log(professor.certificates);
console.log(`--------------------------------------------------------------------------------------------------------------`);  

console.log(`9. Log the nested object 'Certificate' On Console`);
console.log(professor.certificates);
