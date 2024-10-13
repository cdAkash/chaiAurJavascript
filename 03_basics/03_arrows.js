const user ={
    username:"Jute",
    price:999,
    
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="akash"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username="akash"
//     console.log(username);
// }
// chai()

const chai = ()=>{
    let username="akash"
    console.log(username);
}
chai()
// console.log(username);

const addOne = (n1,n2)=>{ // Normal arrow function
    return n1+n2;
}
// console.log(addOne(3,4))

// const addTwo = (n1,n2)=> n1+n2; // Implicit return function

// Reutning objects
const addTwo =(n1,n2)=> (
    {
        username:"aaaa"
    }
)
console.log(addTwo(3,4))