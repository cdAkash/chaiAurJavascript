const accId = 123;
// const -> cannot be reassigned, you cannot change
let accEmail = "Akash@gmail.com"
// let -> can be reassigned, you can change
var accPass = "12345";
accCity = "jaigpur" // it is also possible but not recommended
let accName; //undefined
/*
Prefer not to use var, because of issuse in block scope and functional scope

*/


console.log(accId);
console.log(accEmail);

console.table([accId, accEmail, accPass, accCity,accName])