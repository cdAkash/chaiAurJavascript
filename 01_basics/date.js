//Dates

let myDate = new Date();
console.log(myDate.toString())
// console.log(myDate.getTimezoneOffset())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

console.log(typeof myDate)

let myOwnDate = new Date(2023,0,24)
console.log(myOwnDate.toDateString());

let myOwnDate1 = new Date(2023,0,24,5,3)
console.log(myOwnDate1.toDateString());

let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = new Date.now()
console.log(myTimeStamp);