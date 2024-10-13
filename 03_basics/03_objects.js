// singleton

// object literals
// Object.create

// Using Symbols
const mySym = Symbol("FirstSymbol")
const jsUser = {
    names:"Superman",
    "Full Name" : "Clark Kent",
    age: 18,
    location:"kolkata",
    email:"Email@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"],
    [mySym]:"My first Symbol"
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["Full Name"])
// console.log(jsUser."Full Name"); // its not possible
console.log(jsUser[mySym]);
console.log(typeof mySym);


//Object.freeze(jsUser)// after freezing an object, we can't modify any data of it

jsUser.email = "Email@gmail.com"
console.log(jsUser.email)

console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hey JsUser")
}

jsUser.greetingTwo = function(){
    console.log(`Hey JsUser, ${this.names}`)
}

console.log(jsUser.greeting()) 
console.log(jsUser.greetingTwo())


//Mostly we use access data from object we use dot(.) ooperator