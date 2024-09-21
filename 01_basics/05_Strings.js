const names ="akash"
const title = "Yadav"
console.log(names+title+" India")

console.log(`Hello my name is ${names} and Title is ${title}`);
//Modern way to concatenate string


const gameName = new String("GTA V") // String declartion as objects

console.log(gameName.__proto__); //

console.log(gameName.toLowerCase())

const newStringOne = "    Akash     "
console.log(newStringOne.trim())
console.log(newStringOne)

const url = "https://akash.com/akash%20yadav"
console.log(url.replace('%20','-'))

console.log(url.includes('akash'))