function myname(){
    console.log("Akash")
}
myname()

function addNum(n1,n2){
    return n1+n2
}
console.log(addNum(12,12))

const a = addNum(10,20)
console.log(a)


function loginUserMessage(user = "sam"){
    if(!user){
        console.log("Please enter a user")
        return
    }
    return `${user} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("Akash"))

// ... -> Rest operator or spread Operator

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(100,200,300,400,500))

function calculateCartPrice1(val1, val2, ...num2){
    return num2
}
console.log(calculateCartPrice1(100,200,300,400,500))

// Pass objects to functions

user={
    userName:"Akash",
    price:299
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user)

handleObject({
    userName:"LALA",
    price:999
})
// Two ways to pass ojects to the function as parameter

const myNewArr = [200,300,600]

function acceptArr(value){
    return value[1]
}
console.log(acceptArr(myNewArr))




