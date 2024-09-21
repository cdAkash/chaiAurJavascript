// Primitive 
// 7 types: string, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue = 100.4
const isLogggedInl = false
const outSideTemp = null
let userEmail; // undefined type

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id===anotherID)
const bigNumber  = 99999999999999999999999999n // bigNumbers


// JavaScipt is Dynamically-typed language



// Refrencef(Non primitive)
// Arrays, Objects, Functions
 const heros = ["IronMan","Thor","hulk"] //Arrays

let obj ={
    name:"akash",
    age:23
}// objects


const myFunc = function(){
    console.log("Classic 350");
}

console.log(typeof myFunc);
//++++++++++++++++++++++++++++++++++++++++++//

// Memory working in JavaScript

// stack(Primitive) and Heap(Non-Primitive)

let myName = "Akash"

let yourName = myName // Here it created a copy of the myName and stored in yourName

yourName="Suraj"
console.log(yourName)
console.log(myName);


let userOne ={
    Email:"Akash@google.com"
}
let userTwo = userOne
console.log(userOne.Email);

userTwo.Email="Suraj@google.com"
console.log(userOne.Email);
console.log(userTwo.Email);


